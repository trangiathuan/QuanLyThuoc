import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './AdminHome.css'
import List_Order from '../Component/CRUD-Order/List_Order';

const AdminOrder = () => {
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
                    <List_Order />
                </div>
            </div>
        </div>
    );
}
export default AdminOrder;