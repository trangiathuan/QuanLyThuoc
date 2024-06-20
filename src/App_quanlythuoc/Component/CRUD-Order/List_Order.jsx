import '../CRUD-User/ListUser.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const List_Order = () => {
    return (
        <div>
            <div className="text-center fw-bolder fs-4 pt-3">DANH SÁCH ĐƠN HÀNG</div>

            <table className="table mt-3">
                <thead>
                    <tr className=' text-center'>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">ID sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá tiền</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th className=' text-center btnupdate0'>MDH01</th>
                        <td className=' text-center btnupdate0'>12</td>
                        <td className=' text-center btnupdate0'>1</td>
                        <td className=' text-center btnupdate0'>1.400.000đ</td>
                        <td className=' text-center btnupdate0'>
                            <input type="checkbox" />
                        </td>
                        <td className=' btnupdate1'>
                            <Link to={`/Admin/Update-user/}`}>
                                <button type="button" className="btn btn-info m-1 ">Cập nhật <i class="bi bi-pencil-square"></i></button>
                            </Link>
                            <button type="button" className="btn btn-danger m-1" >Xóa <i class="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th className=' text-center btnupdate0'>MDH02</th>
                        <td className=' text-center btnupdate0'>1</td>
                        <td className=' text-center btnupdate0'>1</td>
                        <td className=' text-center btnupdate0'>400.000đ</td>
                        <td className=' text-center btnupdate0'>
                            <input type="checkbox" />
                        </td>
                        <td className=' btnupdate1'>
                            <Link to={`/Admin/Update-user/}`}>
                                <button type="button" className="btn btn-info m-1 ">Cập nhật <i class="bi bi-pencil-square"></i></button>
                            </Link>
                            <button type="button" className="btn btn-danger m-1" >Xóa <i class="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th className=' text-center btnupdate0'>MDH03</th>
                        <td className=' text-center btnupdate0'>26</td>
                        <td className=' text-center btnupdate0'>1</td>
                        <td className=' text-center btnupdate0'>688.000đ</td>
                        <td className=' text-center btnupdate0'>
                            <input type="checkbox" />
                        </td>
                        <td className=' btnupdate1'>
                            <Link to={`/Admin/Update-user/}`}>
                                <button type="button" className="btn btn-info m-1 ">Cập nhật <i class="bi bi-pencil-square"></i></button>
                            </Link>
                            <button type="button" className="btn btn-danger m-1" >Xóa <i class="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th className=' text-center btnupdate0'>MDH04</th>
                        <td className=' text-center btnupdate0'>16</td>
                        <td className=' text-center btnupdate0'>1</td>
                        <td className=' text-center btnupdate0'>590.000đ</td>
                        <td className=' text-center btnupdate0'>
                            <input type="checkbox" />
                        </td>
                        <td className=' btnupdate1'>
                            <Link to={`/Admin/Update-user/}`}>
                                <button type="button" className="btn btn-info m-1 ">Cập nhật <i class="bi bi-pencil-square"></i></button>
                            </Link>
                            <button type="button" className="btn btn-danger m-1" >Xóa <i class="bi bi-trash3"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
export default List_Order;