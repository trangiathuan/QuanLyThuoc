
import { useState } from 'react';
import '../CRUD-Products/Create_Product.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create_Product = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chucvu, setChucVu] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/signup', { email, password, chucvu })
            .then(res => {
                console.log(res);
                navigate('/Admin/list-user')
            }).catch(err => console.log(err))
    };
    return (
        <div className="form-create">
            <div className="text-center fw-bolder fs-4 mt-2">THÊM TÀI KHOẢN</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group fw-bolder">
                    <label for="ten-thuoc">Email</label>
                    <input type="text" className="form-control" placeholder="Nhập email"
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group fw-bolder">
                    <label for="loai-thuoc">Password</label>
                    <input type="text" className="form-control" placeholder="Nhập password"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group fw-bolder">
                    <label for="chi-tiet">Chức vụ</label>
                    <textarea className="form-control" placeholder="Nhập chức vụ"
                        onChange={e => setChucVu(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-5">Thêm tài khoản</button>
            </form>
        </div>
    );
};
export default Create_Product;