// AllOrders.js
import React, { useEffect, useState } from 'react';
import Header from './Header';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch orders
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8082/orders/all');
      const ordersData = await response.json();
      setOrders(ordersData);
      setError(null);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError('Failed to load orders. Please try again later.');
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen p-6 bg-[#FAF7F2]">
        <Header/>
      {/* Hero Section */}
      <header className="text-center mb-12 bg-[#6B4423] py-8 rounded-xl shadow-lg">
        <h1 className="cafe-title text-4xl font-bold text-white mb-2">TCF Cafe</h1>
        <p className="text-[#8B5E34]">Order Management Dashboard</p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="cafe-title text-2xl mb-6 text-[#6B4423]">All Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#6B4423] text-white">
                    <th className="py-4 px-6 text-left">Order ID</th>
                    <th className="py-4 px-6 text-left">Customer Details</th>
                    <th className="py-4 px-6 text-left">Order Items</th>
                    <th className="py-4 px-6 text-right">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {error ? (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-red-600">
                        <div className="bg-red-50 rounded-lg p-4">
                          {error}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => {
                      const productsList = order.products.map((product) => (
                        <div className="mb-2" key={product.productName}>
                          <span className="font-medium">{product.productName}</span>
                          <div className="text-sm text-gray-600">
                            ₹{product.price} × {product.quantity} = ₹{product.price * product.quantity}
                          </div>
                        </div>
                      ));

                      return (
                        <tr key={order.id} className="order-row border-b border-gray-100">
                          <td className="py-4 px-6">
                            <div className="font-semibold text-[#6B4423]">#{order.id}</div>
                            <div className="text-sm text-gray-500">
                              {new Date().toLocaleDateString()}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="font-medium">{order.custName}</div>
                            <div className="text-sm text-gray-600">{order.custNo}</div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="product-list pl-4">{productsList}</div>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="text-lg font-bold text-[#6B4423]">₹{order.totalBill}</div>
                            <div className="mt-2">
                              <span className="bg-[#D4A574] text-[#6B4423] text-xs px-2 py-1 rounded-full">
                                PAID
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
