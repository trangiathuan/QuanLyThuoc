import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Narbar_login';
import './Shoppingcart.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';







const Cart = () => {
    const navigate = useNavigate;
    const [thuoc, setThuoc] = useState([]);
    const [total, setTotal] = useState();
    const [sl, setSL] = useState(1);
    useEffect(() => {
        axios.get('http://localhost:5000/Cart')
            .then(res => {
                setThuoc(res.data);
                calculateTotal(res.data)
            })
            .catch(err => console.log(err));
    });

    const handleDeleteCart = async (id) => {
        try {
            await axios.delete('http://localhost:5000/delete-cart/' + id)
            alert("Đã xóa sản phẩm khỏi giỏ hàng")
            navigate('/Cart')
        } catch (err) {
            console.log(err);
        }
    }

    const calculateTotal = () => {
        let total = 0;
        thuoc.map((item) => {

            total = total + (item.gia * sl);

        }).reduce((a, b) => a + b, 0);

        setTotal(total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
    }
    return (

        <div>
            <Navbar />
            <div className='title-giohang'>GIỎ HÀNG</div>
            <div>
                {thuoc.map((item) => (
                    <div key={item.id} className='card gh'>
                        <table>
                            <tbody>
                                <tr >
                                    <td className='td-img'>
                                        <img className='img-cart' src={require(`../Product/Images/${item.hinh}`)} />
                                    </td>
                                    <td className='td-name'>
                                        {item.tenthuoc}
                                    </td>
                                    <td className='td-gia'>
                                        {item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </td>
                                    <td className='td-sl'>
                                        <input type="number" placeholder='1' value={1} class="form-control"
                                            onChange={e => setSL(e.target.value)} />
                                    </td>
                                    <td className='td-btn'>
                                        <Link to={`/Cart/${item.id}`}>

                                        </Link>
                                        <button onClick={e => handleDeleteCart(item.id)} type="button" class="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                <div className='row total'>
                    <div className=' col-8'>THÀNH TIỀN: {total}</div>
                    <div className='col-4'>
                        <button type="button" class="btn btn-warning fs-5 btn-tt ">THANH TOÁN</button>
                    </div>
                </div>

            </div>
            <div>
                <div></div>
            </div>
        </div>
    );
}
export default Cart;