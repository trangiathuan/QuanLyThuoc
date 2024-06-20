
import { useState } from 'react';
import './Create_Product.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create_Product = () => {

    const [tenthuoc, setTenThuoc] = useState('');
    const [loai, setLoai] = useState('');
    const [chitiet, setChiTiet] = useState('');
    const [hinh, setHinh] = useState('');
    const [gia, setGia] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/create', { tenthuoc, loai, chitiet, hinh, gia })
            .then(res => {
                console.log(res);
                navigate('/Admin/list-thuoc')
            }).catch(err => console.log(err))
    };
    return (
        <div className="form-create">
            <div className="text-center fw-bolder fs-4 mt-2">THÊM THUỐC</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group fw-bolder">
                    <label for="ten-thuoc">Tên Thuốc</label>
                    <input type="text" className="form-control" placeholder="Nhập tên thuốc"
                        onChange={e => setTenThuoc(e.target.value)} />
                </div>
                <div className="form-group fw-bolder">
                    <label for="loai-thuoc">Loại Thuốc</label>
                    <input type="text" className="form-control" placeholder="Nhập loại thuốc"
                        onChange={e => setLoai(e.target.value)} />
                </div>
                <div className="form-group fw-bolder">
                    <label for="chi-tiet">Chi tiết</label>
                    <textarea className="form-control" placeholder="Nhập chi tiết"
                        onChange={e => setChiTiet(e.target.value)} />
                </div>
                <div className="form-group fw-bolder">
                    <label for="hinh">Hình</label>
                    <input type="text" className="form-control" id="hinh"
                        onChange={e => setHinh(e.target.value)} />
                </div>
                <div className="form-group fw-bolder">
                    <label for="gia">Giá</label>
                    <input type="number" className="form-control" placeholder="Nhập giá bán"
                        onChange={e => setGia(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-5">Thêm thuốc</button>
            </form>
        </div>
    );
};
export default Create_Product;