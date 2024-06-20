import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './Navbar.css'
import Login from '../Login/Login';
const Header_login = () => {
    return (
        <header>
            <nav id='header' className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className='imgNav' src={require("./Images/logo-png.png")} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> <span className="title2">TRANG CHỦ</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="title2">DANH MỤC </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fs-5" href="#">Thần kinh não</a></li>
                                    <li><a className="dropdown-item fs-5" href="#">Vitamin & khoáng chất</a></li>
                                    <li><a className="dropdown-item fs-5" href="#">Sức khỏe tim mạch</a></li>
                                    <li><a className="dropdown-item fs-5" href="#">Tăng sức đề kháng, miễn dịch</a></li>
                                    <li><a className="dropdown-item fs-5" href="#">Hỗ trợ tiêu hóa</a></li>
                                    <li><a className="dropdown-item fs-5" href="#">Sinh lý - Nội tiết tố</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all-products"> <span className="title2">TẤT CẢ SẢN PHẨM</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="title2">GIỚI THIỆU</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" href="#">Thần kinh não</a></li>
                                    <li><a className="dropdown-item" href="#">Vitamin & khoáng chất</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="title2">LIÊN HỆ</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" href="#">Thần kinh não</a></li>
                                    <li><a className="dropdown-item" href="#">Vitamin & khoáng chất</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-3 fs-6" type="search" placeholder="Tìm kiếm thuốc" aria-label="Search" />
                        <Link to='/Search'><button id='btn1' className="btn btn-primary fs-6  " type="submit"><i className="bi bi-search"></i></button></Link>
                    </form>
                    <Link to='/Cart'>
                        <button className="btn btn-primary d-flex me-3 ms-5 fs-7 " type="submit"><strong><i class="bi bi-cart-plus"></i></strong><span></span></button>
                    </Link>
                    <Link to='/Login'>
                        <button className="btn btn-primary d-flex me-3 ms-2 fs-6 " type="submit"><strong>ĐĂNG XUẤT</strong><i className="bi bi-person ms-2"></i></button>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path='/Login' element={<Login />} />
            </Routes>
        </header>
    );
};
export default Header_login;