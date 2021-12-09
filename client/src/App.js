import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home.jsx';
import Blog from './screens/blog.jsx';
import CreateProduct from './screens/create_product.jsx';
import OneProduct from './screens/one_product.jsx';
import Products from './screens/products.jsx';



function App() {



  return (
    <div className="App">
      <Routes>
      
        <Route exact path="/" element={<Home />} />
  
        <Route exact path="/blog" element={<Blog />} />
            
        <Route exact path="/product" element={<OneProduct />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/product-create" element={<CreateProduct />} />
                 
      </Routes>
    </div>
  );
}

export default App;
