import React, { useState, useEffect } from 'react';
import Header from './Header';

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
    image: null,
  });

  const baseUrl = 'http://localhost:8081/products';

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/all`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    try {
      const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
        setFormData({
          name: '',
          price: '',
          description: '',
          stock: '',
          image: null,
        });
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="bg-cafe-cream font-poppins">
        <Header/>
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold text-white mb-4">
              TCF Cafe
            </h1>
            <p className="text-xl text-white opacity-90 max-w-2xl font-light">
              Where every cup tells a story
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Add Product Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-cafe-accent/20">
            <h2 className="font-playfair text-3xl font-bold text-cafe-brown mb-6 text-center">
              Add a New Dish
            </h2>
            <form
              id="addProductForm"
              enctype="multipart/form-data"
              className="space-y-6"
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cafe-dark"
                  >
                    Dish Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g., Cappuccino"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cafe-accent focus:border-transparent transition duration-200"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-cafe-dark"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="0.00"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cafe-accent focus:border-transparent transition duration-200"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-cafe-dark"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe your dish..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cafe-accent focus:border-transparent transition duration-200"
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-cafe-dark"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    placeholder="Available quantity"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cafe-accent focus:border-transparent transition duration-200"
                    value={formData.stock}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-cafe-dark"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cafe-accent focus:border-transparent transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cafe-accent/10 file:text-cafe-brown hover:file:bg-cafe-accent/20"
                    accept="image/*"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-cafe-brown text-white py-4 px-6 rounded-lg font-medium hover:bg-cafe-dark transition duration-200 transform hover:scale-[1.02]"
              >
                Add to Menu
              </button>
            </form>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="font-playfair text-4xl font-bold text-cafe-brown text-center mb-12">
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const imgUrl = `${baseUrl}/image/${product.id}`;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="relative h-64">
                    <img
                      src={imgUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-cafe-brown font-semibold">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-cafe-brown mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm font-medium ${
                          product.stock > 10
                            ? 'text-green-600'
                            : 'text-orange-500'
                        }`}
                      >
                        {product.stock > 0
                          ? `${product.stock} available`
                          : 'Out of stock'}
                      </span>
                      <div
                        className={`h-2 w-2 rounded-full ${
                          product.stock > 10
                            ? 'bg-green-600'
                            : product.stock > 0
                            ? 'bg-orange-500'
                            : 'bg-red-500'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
