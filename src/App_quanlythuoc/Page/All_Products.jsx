import './All_Products.css'
import Navbar from '../Component/Navbar/Navbar.jsx'
import ProductTKN from '../Component/Product/ProductTKN.jsx'
import ProductVTM from '../Component/Product/ProductVTM.jsx'
import ProductSKTM from '../Component/Product/ProductSKTM.jsx'
import ProductTSDK from '../Component/Product/ProductTSDK.jsx'
import ProductHTTH from '../Component/Product/ProductHTTH.jsx'
import ProductSL from '../Component/Product/ProductSL.jsx'



const All_Products = () => {
    return (



        <div>
            <Navbar />
            <div className="container-fluid pt-5 mt-5 ctnml">
                <div className="title_all">TẤT CẢ SẢN PHẨM </div>
                <div className="row ml_product">
                    <div className="col">
                        <ProductTKN />
                    </div>
                </div>
                <div className="row ml_product pt-4">
                    <div className="col">
                        <ProductVTM />
                    </div>
                </div>
                <div className="row ml_product pt-4">
                    <div className="col">
                        <ProductSKTM />
                    </div>
                </div>
                <div className="row ml_product pt-4">
                    <div className="col">
                        <ProductTSDK />
                    </div>
                </div>
                <div className="row ml_product pt-4">
                    <div className="col">
                        <ProductHTTH />
                    </div>
                </div>
                <div className="row ml_product pt-4">
                    <div className="col">
                        <ProductSL />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default All_Products;