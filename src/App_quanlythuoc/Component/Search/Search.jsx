import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Product/Product.css'
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'



const Search = () => {

    const [thuoc, setThuoc] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/thuoc-vitamin')
            .then(res => {
                setThuoc(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div className="row">
            <div className="col-2"></div>
            <div class="col Product text-center">
                <Navbar />
                <div className="title_all_products pt-5 mt-5">KẾT QUẢ TÌM KIẾM</div>
                <div className="row">
                    {thuoc.map((item) => (
                        <div className="cardpad col-3" key={item.id}>
                            <Link to={`/Product-detail/${item.id}`}>
                                <div className="card cardpad ">
                                    <img className="card-img-top cardimg" src={require(`../Product/Images/${item.hinh}`)} />
                                    <div className="card-body">
                                        <h6 id="namePr">{item.tenthuoc}</h6>
                                        <p id="detailPr">{item.chitiet}</p>
                                        <p className="price">{item.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} / Hộp</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}
export default Search;