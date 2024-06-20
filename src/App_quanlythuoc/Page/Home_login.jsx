import React from 'react';
import './Home.css'
import Navbar from '../Component/Navbar/Navbar.jsx';
import Footer from '../Component/Footer/Footer.jsx';
import Category from '../Component/Category/Category.jsx';
import ProductSPNB from '../Component/Product/ProductTKN.jsx';
import Carousel from '../Component/Carousel/Carousel.jsx';
import Subbanner from '../Component/Carousel/Subbanner.jsx';
import Brands from '../Component/Brands/Brands.jsx';
import Nar_login from '../Component/Navbar/Narbar_login.jsx'




class Home_login extends React.Component {
    render() {
        return (
            <div>
                <Nar_login />
                <div class="container text-center pt-5 mt-5 m-0">


                    <div class="row">
                        <div class="col-2">
                            <Category />
                        </div>
                        <div class="col-7">
                            <Carousel />
                        </div>
                        <div class="col-3">
                            <Subbanner />
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-12 ProductSPNB ">
                            <div class="title">SẢN PHẨM NỔI BẬT</div>
                            <ProductSPNB />
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-12">
                            <Brands />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <Footer />
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}
export default Home_login;