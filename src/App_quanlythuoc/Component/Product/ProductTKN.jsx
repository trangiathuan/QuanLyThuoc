import React, { useEffect, useState } from "react";
import axios from "axios";
import './Product.css'
import { Link } from "react-router-dom";




const ProductTKN = () => {

    const [thuoc, setThuoc] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/thuoc/than-kinh-nao')
            .then(res => {
                setThuoc(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div class="Product">
            <div className="title_all_products">THẦN KINH NÃO</div>
            <div className="row">
                {thuoc.map((item) => (
                    <div className="cardpad col-3" key={item.id}>
                        <Link to={`/Product-detail/${item.id}`}>
                            <div className="card cardpad ">
                                <img className="card-img-top cardimg" src={require(`./Images/${item.hinh}`)} />
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
    )
}
export default ProductTKN;