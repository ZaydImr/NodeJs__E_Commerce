import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Announcement from './Components/Announcement';
import NewsLetter from './Components/NewsLetter';

function App() {

  const [user,setUser] = useState(false);

  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
      </Routes>
      <NewsLetter />
    </Router>
  );
}

export default App;
