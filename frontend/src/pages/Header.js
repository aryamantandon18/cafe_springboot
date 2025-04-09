import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-amber-800">TCF Cafe</span>
          <div className="hidden md:flex space-x-8">
          <Link to="/">
              <a href="#home" className="text-gray-700 hover:text-amber-600">Home</a>
            </Link>
            <Link to="/order">
              <a href="#home" className="text-gray-700 hover:text-amber-600">Order Now</a>
            </Link>
            <Link to="/AddProduct">
              <a href="#home" className="text-gray-700 hover:text-amber-600">New Dishes</a>
            </Link>
            <Link to="/AllOrder">
              <a href="#home" className="text-gray-700 hover:text-amber-600">All Orders</a>
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-amber-600">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
