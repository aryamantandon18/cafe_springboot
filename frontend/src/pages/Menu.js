import React, { useEffect, useState } from 'react';
import Header from './Header';

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products function
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let productList = [];
        for (let i = 1; i <= 10; i++) {
          const response = await fetch(`http://localhost:8081/products/${i}`);
          if (!response.ok) continue;
          const product = await response.json();

          // Convert base64 to image URL
          product.image = product.base64Image ? `data:image/jpeg;base64,${product.base64Image}` : 'placeholder.jpg';
          productList.push(product);
        }
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-amber-50 menu-pattern min-h-screen font-poppins">
        <Header/>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-amber-900 mb-4">TCF Cafe</h1>
          <p className="text-amber-800/80 text-lg">Exquisite flavors, memorable moments</p>
          <div className="w-24 h-1 bg-amber-900/20 mx-auto mt-6 rounded-full"></div>
        </header>

        {loading ? (
          <p className="text-gray-600">Loading menu...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div id="menu" className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-playfair text-2xl font-semibold text-amber-900 mb-2">{product.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-amber-900">₹{product.price}</span>
                      <button className="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 hover:bg-amber-800 hover:scale-105 active:scale-95">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
