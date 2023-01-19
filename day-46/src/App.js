import './App.css';
import { Outlet } from 'react-router-dom'
import ProductList from './components/ProductList';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header';
import { useState } from 'react';

function App() {

  const [wishList, setWishList] = useState([])
  return (
    <div>
      <Header wishlist={wishList} setWishList={setWishList} />
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        <Routes>
          <Route path='/' element={<ProductList wishlist={wishList} setWishList={setWishList} />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Outlet />
      </div>
    </div>

  );
}

export default App;
