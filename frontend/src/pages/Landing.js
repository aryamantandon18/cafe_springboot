import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Landing = () => {
  // Static milestone data
  const milestones = [
    { value: 1000, label: 'Customers Served' },
    { value: 50, label: 'Dishes on the Menu' },
    { value: 5, label: 'Years in Business' },
    { value: 200, label: 'Employees' }
  ];

  return (
    <div className="bg-amber-50">
      {/* Header */}
   <Header/>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">Authentic South Indian Flavors</h1>
            <p className="text-lg text-gray-700 mb-8">Experience the rich taste of traditional South Indian cuisine in every bite.</p>
            <Link to="/menu">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
                View Menu
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" alt="South Indian Cuisine" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-12">Our Story</h2>
          <p className="text-gray-700 mb-6">Founded in 2020, TCF Cafe brings the authentic flavors of South India to your plate. Our recipes have been passed down through generations, ensuring each dish tells a story of tradition and taste.</p>
          <p className="text-gray-700">We take pride in using fresh, locally-sourced ingredients and traditional cooking methods to create dishes that transport you straight to the heart of South India.</p>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{milestone.value}</div>
                <div className="text-gray-700">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TCF Cafe</h3>
            <p className="text-amber-200">Bringing authentic South Indian flavors to your table.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-amber-200">123 Foodie Street, Chennai, Tamil Nadu</p>
            <p className="text-amber-200">Phone: +91 123-456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-amber-200">Mon-Sat: 8:00 AM - 10:00 PM</p>
            <p className="text-amber-200">Sunday: 9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">&copy; 2024 TCF Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
