import './ListUser.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const ListUser = () => {


    const [user, setUser] = useState([]);

    const handleDelete = async (UserID) => {
        try {
            await axios.delete('http://localhost:5000/user/' + UserID)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/user')
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    return (
        <div>
            <div className="text-center fw-bolder fs-4">DANH SÁCH TÀI KHOẢN</div>
            <div><Link to='/Admin/Create/User'><button type="button" className="btn btn-success m-1"> <i class="bi bi-plus-circle"></i> Thêm tài khoản</button></Link></div>
            <table className="table">
                <thead>
                    <tr className=' text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Chức vụ</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item) => (
                        <tr key={item.UserID}>
                            <th className=' text-center btnupdate0' >{item.UserID}</th>
                            <td className=' text-center btnupdate'>{item.email} </td>
                            <td className=' text-center btnupdate'>{item.password}</td>
                            <td className=' text-center btnupdate0'>{item.chucvu}</td>
                            <td className=' btnupdate1'>
                                <Link to={`/Admin/Update-user/${item.UserID}`}>
                                    <button type="button" className="btn btn-info m-1 ">Cập nhật <i class="bi bi-pencil-square"></i></button>
                                </Link>
                                <button type="button" className="btn btn-danger m-1" onClick={e => handleDelete(item.UserID)}>Xóa <i class="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListUser;