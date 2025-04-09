import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import Order from './pages/Order';
import AddProduct from './pages/AddProduct';
import AllOrders from './pages/AllOrders';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/order' element={<Order/>} />
          <Route path='/AddProduct' element={<AddProduct/>} />
          <Route path='/AllOrder' element={<AllOrders/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
