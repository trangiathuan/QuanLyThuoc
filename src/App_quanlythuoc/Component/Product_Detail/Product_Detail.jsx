import './Product_Detail.css'
import Narbar from '../Navbar/Narbar_login'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product_Detail = () => {


    const { id } = useParams();
    const [thuoc, setThuoc] = useState([]);
    const [soluong, setSL] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/Product-detail/' + id)
            .then(res => {
                setThuoc(res.data)
            })
            .catch(err =>
                console.log(err))
    }, []);

    const handleAdd = (item) => {
        console.log(item);
        axios.post('http://localhost:5000/Add/', item)
            .then(res => {
                console.log(res.data);
                alert('Đã thêm sản phẩm vào giỏ hàng')
            }).catch(err => console.log(err))
    };
    return (
        <div className=''>
            <Narbar />
            <div className='detail '>
                <div className='title_ttt'>THÔNG TIN THUỐC</div>
                <div className="card card_detail">
                    {thuoc.map((item) => (

                        <div className='row'>
                            <div className='col-5'>
                                <img className='img_detail' src={require(`../Product/Images/${item.hinh}`)} />
                            </div>
                            <div className='col-7'>
                                <div className="card-body">
                                    <div className='name_detail'>
                                        <h2>{item.tenthuoc}</h2>
                                    </div>
                                    <div>
                                        <span className='title_Price'>Giá: </span>
                                        <span className='price_detail'>{item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                    </div>
                                    <div className='title_Price'>Chi tiết: </div>
                                    <div className='detail_product'>
                                        {item.chitiet}
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <span className='title-sl'>Số lượng:</span>
                                        </div>
                                        <div className='col-3'>
                                            <input type="number" class="form-control input-sl" value={1} onChange={e => setSL(e.target.value)} />
                                        </div>
                                        <div className='col-6'>
                                            <button onClick={e => handleAdd(item)} type='submit' class="btn btn-primary fs-5 ml-5">Thêm vào giỏ hàng <i class="bi bi-cart-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Product_Detail;
