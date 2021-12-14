import { React, useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

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
import { getProducts, deleteProduct } from '../services/product.js';
import { registerUser, loginUser, removeToken } from '../services/auth.js';


const Main = () => {
  let navigate = useNavigate();
  //-------PRODUCTS--------------------------------------  
  const [ products, setProducts ] = useState();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };
    fetchProducts();
  },[]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prevState) => prevState.filter((product) => product.id !== id));
    navigate("/products")
  }
//------USERS-------------------------------------------
  const [ currentUser, setCurrentUser ] = useState(null);

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    console.log(handleRegister);
    navigate('/');
  };

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    navigate('/');
  };

  const handleLogout = () => {
    console.log("logout?")
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

//----RENDER-------------------------------------------
  return ( 
    <div className="Main">
    <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/products" element={<Products 
              products={products}
          />} />

          <Route exact path="/product/:id" element={<OneProduct 
              handleDelete={handleDelete}
          />} />

          <Route exact path="/create-product" element={<CreateProduct />} />

          <Route exact path="/edit-product/:id" element={<EditProduct />} />

        {/* ---------------------------------------- */}
          
          <Route exact path="/blog" element={<Blog />} />
              handleLogout={handleLogout}
              
          <Route exact path="/admin-blog" element={<AdminBlog />} />
     
          <Route exact path="/create-user" element={<CreateUser 
            handleRegister={handleRegister}
          />} />  
          
          <Route exact path="/login" element={<Login 
            handleLogin={handleLogin}
          />} />

          <Route path="*" element={<ErrorPage />} />
    </Routes>
</div>
   );
}
 
export default Main;