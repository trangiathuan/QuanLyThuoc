import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/user', { email, password })
      .then(res => {
        if (email == "admin@gmail.com" && password == "123") {
          navigate('/Admin')
          alert("Đăng nhập thành công")
        }
        else if (res.data == "Login Successfully") {
          alert("Đăng nhập thành công")
          navigate('/Home')
        } else {
          alert("Đăng nhập thất bại")
        }
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <div className="ctn">

      <div className="form">
        <img className="imgcenter" src={require("./logo-png.png")} />
        <h3 className="fw-bold">ĐĂNG NHẬP</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <strong>Email</strong>
            </label>
            <input type="text" className="form-control" name='email'
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Mật khẩu</strong>
            </label>
            <input type="password" className="form-control" name='password'
              onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form-group pt-3">
            <button type="submit" className="btn btn-primary btn1">
              ĐĂNG NHẬP
            </button>
          </div>
          <div className="form-group">
            <Link to="/Signup" type="submit" className=" btn2">
              ĐĂNG KÝ TÀI KHOẢN
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
