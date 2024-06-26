import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App_quanlythuoc/Page/Home.jsx';
import reportWebVitals from './reportWebVitals';
import Login from './App_quanlythuoc/Component/Login/Login.jsx';
import Signup from './App_quanlythuoc/Component/Login/Signup.jsx';
import All_Products from './App_quanlythuoc/Page/All_Products.jsx';
import AdminHome from './App_quanlythuoc/AdminPage/AdminHome.jsx';
import AdminCreate from './App_quanlythuoc/AdminPage/AdminCreate.jsx';
import Admin_List_Product from './App_quanlythuoc/AdminPage/Admin_List_Product.jsx';
import AdminUpdate from './App_quanlythuoc/AdminPage/AdminUpdateHome.jsx';
import Home_login from './App_quanlythuoc/Page/Home_login.jsx';
import Product_Detail from './App_quanlythuoc/Component/Product_Detail/Product_Detail.jsx';
import ProductLoai_TKN from './App_quanlythuoc/Page/Product_TKN_page.jsx';
import ProductLoai_VTM from './App_quanlythuoc/Page/Product_VTM_page.jsx';
import ProductLoai_SKTM from './App_quanlythuoc/Page/Product_SKTM_page.jsx';
import ProductLoai_TSDK from './App_quanlythuoc/Page/Product_TSDK_page.jsx';
import ProductLoai_HTTH from './App_quanlythuoc/Page/Product_HTTH_page.jsx';
import ProductLoai_SL from './App_quanlythuoc/Page/Product_SL_page.jsx';
import Admin_List_User from './App_quanlythuoc/AdminPage/Admin_List_User.jsx';
import AdminCreateUser from './App_quanlythuoc/AdminPage/AdminCreateUser .jsx';
import AdminUpdateUser from './App_quanlythuoc/AdminPage/AdminUpdateUser.jsx';
import Cart from './App_quanlythuoc/Component/Shoppingcart.js/ShoppingCart1.jsx';
import Search from './App_quanlythuoc/Component/Search/Search.jsx';
import AdminOrder from './App_quanlythuoc/AdminPage/AdminOrder.jsx';
import About from './App_quanlythuoc/Component/About/About.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Home' element={<Home_login />} />
        <Route path='/all-products' element={<All_Products />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Admin' element={<AdminHome />} />
        <Route path='/Admin/list-thuoc' element={<Admin_List_Product />} />
        <Route path='/Admin/list-user' element={<Admin_List_User />} />
        <Route path='/Admin/list-order' element={<AdminOrder />} />
        <Route path='/Admin/Create' element={<AdminCreate />} />
        <Route path='/Admin/Update/:id' element={<AdminUpdate />} />
        <Route path='/Admin/Create/User' element={<AdminCreateUser />} />
        <Route path='/Admin/Update-user/:id' element={<AdminUpdateUser />} />
        <Route path='/Product-detail/:id' element={<Product_Detail />} />
        <Route path='/all-products/than-kinh-nao' element={<ProductLoai_TKN />} />
        <Route path='/all-products/viatamin-khoang-chat' element={<ProductLoai_VTM />} />
        <Route path='/all-products/suc-khoa-tim-mach' element={<ProductLoai_SKTM />} />
        <Route path='/all-products/tang-suc-de-khang' element={<ProductLoai_TSDK />} />
        <Route path='/all-products/ho-tro-tieu-hoa' element={<ProductLoai_HTTH />} />
        <Route path='/all-products/sinh-ly-noi-tiet-to' element={<ProductLoai_SL />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
