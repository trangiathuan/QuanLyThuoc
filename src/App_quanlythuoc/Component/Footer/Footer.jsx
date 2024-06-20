import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="container">
      <footer class="py-5 ftcenter">
        <div class="row">
          <div class="col-3">
            <h5>DANH MỤC</h5>
            <ul class="nav flex-column ">
              <li class="nav-item mb-2 ">
                <a href="#" class="nav-link p-0 text-muted ">
                  Thần kinh não
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Vitamin & khoáng chất
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Sức khỏe tim mạch
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Tăng sức đề kháng, miễn dịch
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Hỗ trợ tiêu hóa
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Sinh lý - Nội tiết tố
                </a>
              </li>
            </ul>
          </div>

          <div class="col-3">
            <h5>VỀ CHÚNG TÔI</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Giới thiệu
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Hệ thống cửa hàng
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Giấy phép kinh doanh
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Chính sách bảo mật
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Chính sách thanh toán
                </a>
              </li>
            </ul>
          </div>

          <div class="col-3">
            <h5>LIÊN HỆ</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Tổng đài CSKH
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Hỗ trợ đặt hàng
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Hotline: 1800 6821
                </a>
              </li>
            </ul>
          </div>

          <div class="col-3">
            <h5>Theo dõi chúng tôi</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <i class="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <i class="bi bi-youtube"></i> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bdtop">

        </div>
        <div class="d-flex justify-content-between my-4 boder-top text-center ftcenter">
          <p class="title3">
            © 2021 - 2025 Công ty Cổ Phần Dược Phẩm Vân Anh Pharmacy <br />
            Địa chỉ: 331 QL1A, An Phú Đông, Quận 12, Thành phố Hồ Chí Minh, Việt Nam
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
