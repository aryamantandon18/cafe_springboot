import React, { useState, useEffect } from 'react';
import Header from './Header';

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [custName, setCustName] = useState('');
  const [custNo, setCustNo] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8081/products/all');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Update Cart Display
  const updateCartDisplay = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.productPrice * item.quantity;
    });
    setTotalAmount(total);
  };

  // Add Item to Cart
  const addToCart = (productId, productName, productPrice) => {
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    if (quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }

    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      setCart([...cart, { productId, productName, productPrice, quantity }]);
    }
    updateCartDisplay();
  };

  // Remove Item from Cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);
    updateCartDisplay();
  };

  // Place Order
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert('Please add items to your order');
      return;
    }

    if (!custName || !custNo) {
      alert('Please fill in customer details');
      return;
    }

    const orderData = {
      custName,
      custNo,
      productIds: cart.map(item => item.productId),
      quantities: cart.map(item => item.quantity)
    };

    try {
      const response = await fetch('http://localhost:8082/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        alert('Order placed successfully!');
        setCart([]);
        setCustName('');
        setCustNo('');
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-20 p-6"> {/* Adjust padding-top */}
        <header className="text-center mb-12">
          <h1 className="cafe-title text-4xl font-bold text-[#6B4423] mb-2">TCF Cafe</h1>
          <p className="text-[#8B5E34]">Elegant Dining Experience</p>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Information Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="cafe-title text-2xl mb-6 text-[#6B4423]">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                  <input
                    type="text"
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    value={custNo}
                    onChange={(e) => setCustNo(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="cafe-title text-2xl mb-6 text-[#6B4423]">Menu Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map(product => (
                  <div key={product.id} className="product-card bg-[#F5E6D3] rounded-lg overflow-hidden">
                    <img
                      src={`http://localhost:8081/products/image/${product.id}`}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6B4423] font-bold">₹{product.price}</span>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            id={`qty-${product.id}`}
                            defaultValue="1"
                            min="1"
                            className="quantity-input px-2 py-1"
                          />
                          <button
                            onClick={() => addToCart(product.id, product.name, product.price)}
                            className="bg-[#D4A574] text-white px-6 py-2 rounded-lg hover:bg-[#D67A42] transition-all"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="cafe-title text-2xl mb-6 text-[#6B4423]">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 py-4">Your cart is empty</div>
                ) : (
                  cart.map(item => (
                    <div key={item.productId} className="cart-item bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{item.productName}</h4>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">₹{item.productPrice} × {item.quantity}</span>
                        <span className="font-semibold">₹{item.productPrice * item.quantity}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="order-summary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-xl font-bold text-[#6B4423]">₹{totalAmount}</span>
                </div>
                <button
                  onClick={placeOrder}
                  className="w-full bg-[#6B4423] text-white py-3 rounded-lg font-semibold hover:bg-[#4F2E19] transition-all"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
