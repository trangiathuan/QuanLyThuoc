import './CRUD_Product.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const CRUD_Product = () => {


    const [thuoc, setThuoc] = useState([]);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:5000/thuoc/' + id)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/thuoc')
            .then(res => {
                setThuoc(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    return (
        <div>
            <div className="text-center fw-bolder fs-4">DANH SÁCH THUỐC</div>
            <div><Link to='/Admin/Create'><button type="button" className="btn btn-success m-1"> <i class="bi bi-plus-circle"></i> Thêm thuốc</button></Link></div>
            <table className="table">
                <thead>
                    <tr className=' text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">Tên thuốc</th>
                        <th scope="col">Loại thuốc</th>
                        <th scope="col">Chi tiết</th>
                        <th scope="col">Hình</th>
                        <th scope="col">Giá </th>
                        <th scope="col">Hành động </th>
                    </tr>
                </thead>
                <tbody>
                    {thuoc.map((item) => (
                        <tr key={item.id}>
                            <th scope="row" >{item.id}</th>
                            <td className='tenthuoc'>{item.tenthuoc} </td>
                            <td className=' text-center'>{item.loai}</td>
                            <td className="chitiet">{item.chitiet}</td>
                            <td className=' text-center'>{item.hinh}</td>
                            <td className=' text-center'>{item.gia}</td>
                            <td>
                                <Link to={`/Admin/Update/${item.id}`}>
                                    <button type="button" className="btn btn-info m-1">Cập nhật <i class="bi bi-pencil-square"></i></button>
                                </Link>
                                <button type="button" className="btn btn-danger m-1" onClick={e => handleDelete(item.id)}>Xóa <i class="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default CRUD_Product;