import React from "react";
import './Brands.css'




const Brands = () => {
    return (
        <div>
            <div class="titleBrands">
                THƯƠNG HIỆN NỔI BẬT
            </div>
            <div class=" brandsCard row">
                <div className=" col-3">
                    <div class="card  ">
                        <img class="card-img-top brandimg " src={require("./Images/brand01.webp")} />
                    </div>
                </div>
                <div className=" col-3">
                    <div class="card  ">
                        <img class="card-img-top brandimg " src={require("./Images/brand02.webp")} />
                    </div>
                </div>
                <div className=" col-3">
                    <div class="card  ">
                        <img class="card-img-top brandimg " src={require("./Images/brand03.webp")} />
                    </div>
                </div>
                <div className=" col-3">
                    <div class="card  ">
                        <img class="card-img-top brandimg " src={require("./Images/brand04.webp")} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Brands;