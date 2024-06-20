import React from "react";
import './Category.css'
import { Link } from "react-router-dom";




const Category = () => {
    return (
        <div className="Category">
            <ul class="list-group">
                <li class="list-group-item active title1">DANH MỤC THUỐC</li>
                <div class="atext">
                    <Link to="/all-products/than-kinh-nao" class="list-group-item list-group-item-action" >Thần kinh não</Link>
                    <Link to="/all-products/viatamin-khoang-chat" class="list-group-item list-group-item-action" >Vitamin & khoáng chất</Link>
                    <Link to="/all-products/suc-khoa-tim-mach" class="list-group-item list-group-item-action">Sức khỏe tim mạch</Link>
                    <Link to="/all-products/tang-suc-de-khang" class="list-group-item list-group-item-action">Tăng sức đề kháng, miễn dịch</Link>
                    <Link to="/all-products/ho-tro-tieu-hoa" class="list-group-item list-group-item-action">Hỗ trợ tiêu hóa</Link>
                    <Link to="/all-products/sinh-ly-noi-tiet-to" class="list-group-item list-group-item-action">Sinh lý - Nội tiết tố</Link>
                </div>
            </ul >
        </div >
    )
}
export default Category;