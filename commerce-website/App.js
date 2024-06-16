import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Carts from './pages/Cart';
import Login from './pages/Login';
import Home from './pages/home';
import Hero from './components/Hero/Hero'
import Popularr from './components/Popular/Popularr';



function App() {

  
  return (
      <div>
        
        <Home/>
        <Hero/>
        <Popularr/>
      </div>
  );
}

export default App;