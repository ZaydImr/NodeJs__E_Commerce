import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import Announcement from './Components/Announcement';
import NewsLetter from './Components/NewsLetter';

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error/>} />
      </Routes>
      <NewsLetter />
    </>
  );
}

export default App;
