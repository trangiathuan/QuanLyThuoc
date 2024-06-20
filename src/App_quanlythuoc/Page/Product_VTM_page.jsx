import React from 'react';
import './Home.css'
import Navbar from '../Component/Navbar/Navbar.jsx';
import Footer from '../Component/Footer/Footer.jsx';
import Category from '../Component/Category/Category.jsx';
import Carousel from '../Component/Carousel/Carousel.jsx';
import Subbanner from '../Component/Carousel/Subbanner.jsx';
import ProductVTM from '../Component/Product/ProductVTM.jsx';






class ProductLoai_VTM extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
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
                            <ProductVTM />
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
export default ProductLoai_VTM;