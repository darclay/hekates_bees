import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../screens/home/Home.jsx';
import Blog from '../screens/blog/Blog.jsx';
import CreateProduct from '../screens/create_product/CreateProduct.jsx';
import OneProduct from '../screens/one_product/OneProduct.jsx';
import Products from '../screens/products/Products.jsx';
import EditProduct from '../screens/edit_product/EditProduct.jsx';
import AdminBlog from '../screens/admin_blog/AdminBlog.jsx';
import CreateUser from '../screens/create_user/CreateUser.jsx';
import Login from '../screens/login/Login.jsx';
import ErrorPage from '../screens/error_page/ErrorPage.jsx';
import { getProducts } from '../services/product.js';

const Main = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };
    fetchProducts();
  },[]);


  return ( 
    <div className="Main">
    <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/products" element={<Products 
              products={products}
          />} />

          <Route exact path="/product" element={<OneProduct />} />

          <Route exact path="/create-product" element={<CreateProduct />} />

          <Route exact path="/edit-product" element={<EditProduct />} />

        {/* -------------------------------------------------- */}
          
          <Route exact path="/blog" element={<Blog />} />
          
          <Route exact path="/admin-blog" element={<AdminBlog />} />
     
          <Route exact path="/create-user" element={<CreateUser />} />  
          
          <Route exact path="/login" element={<Login />} />

          <Route path="*" element={<ErrorPage />} />
    </Routes>
</div>
   );
}
 
export default Main;