import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CRUD_Product from '../Component/CRUD-Products/CRUD_Product';
import './AdminHome.css'
import ListUser from '../Component/CRUD-User/ListUser';

const Admin_List_User = () => {
    return (
        <div className="container-fruit p-2 pt-0">
            <div className="row">
                <div className="bg-dark col-2 brg " >
                    <ul class="nav flex-column text-center ">
                        <li class="nav-item "> <img className='img-logo-admin' src={require("../Component/Navbar/Images/logo-png.png")} /></li>
                        <li class="nav-item d-grid p-1 ">
                            <button type="button" class="btn btn-secondary">
                                <Link to="/Admin/list-thuoc">Quản lý thuốc</Link>
                            </button>
                        </li>
                        <li class="nav-item d-grid p-1">
                            <button type="button" class="btn btn-secondary">Quản lý tài khoản</button>
                        </li>
                        <li class="nav-item d-grid p-1">
                            <button type="button" class="btn btn-secondary">
                                <Link to="/Admin/list-order">Quản lý đơn hàng</Link>
                            </button>
                        </li>
                    </ul>
                </div>


                <div className='col-10 dst'>
                    <ListUser />
                </div>
            </div>
        </div>
    );
}
export default Admin_List_User;