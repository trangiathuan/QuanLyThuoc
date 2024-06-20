import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Create_Product from '../Component/CRUD-Products/Create_Product';
import './AdminHome.css'

const AdminCreate = () => {
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
                            <button type="button" class="btn btn-secondary">
                                <Link to="/Admin/list-user">Quản lý tài khoản</Link>
                            </button>
                        </li>
                        <li class="nav-item d-grid p-1">
                            <button type="button" class="btn btn-secondary">
                                <Link to="/Admin/list-order">Quản lý đơn hàng</Link>
                            </button>
                        </li>
                    </ul>
                </div>


                <div className='col-10 dst'>
                    <Create_Product />
                </div>
            </div>
        </div>
    );
}
export default AdminCreate;