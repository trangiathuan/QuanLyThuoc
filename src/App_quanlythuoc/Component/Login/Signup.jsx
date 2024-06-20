import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [chucvu, setChucvu] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/signup', { email, password, chucvu })
      .then(res => {
        console.log(res)
        if (email != '' && password != '')

          return alert("Đăng ký thành công"), navigate('/Login')
        else
          return alert("Vui lòng nhập đầy đủ thông tin !!!")
      }).catch(err => console.log(err))

  }
  return (

    <div className="ctn">
      <div className="form ">
        <form onSubmit={handleSubmit}>
          <img className="imgcenter" src={require("./logo-png.png")} />
          <h3 className="fw-bold text-center pt-3">ĐĂNG KÝ TÀI KHOẢN</h3>
          <div className="form-group pt-3">
            <label><strong>Email</strong></label>
            <input type="email" class="form-control" placeholder=""
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label><strong>Mật khẩu</strong></label>
            <input type="password" class="form-control" placeholder=""
              onChange={e => setPassword(e.target.value)} />
          </div>
          {/* <div className="form-group">
            <label><strong>Chức vụ</strong></label>
            <input type="text" class="form-control" placeholder=""
              onChange={e => setChucvu(e.target.value)} />
          </div> */}
          <div className="form-group pt-3">
            <button type="submit" className="btn btn-primary btn1">
              ĐĂNG KÝ
            </button>
          </div>
          <div className="form-group">
            <Link to='/Login' type="submit" className=" btn3">
              ĐĂNG NHẬP
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;