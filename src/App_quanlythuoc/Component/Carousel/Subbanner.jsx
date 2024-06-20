import React from "react";
import './Carousel.css'

const Subbanner = () => {
    return (
        <div>
            <div class="row">
                <img class="Sub" src={require("./Images/subbanner01.webp")} />
            </div>
            <div class="row">
                <img class="Sub1" src={require("./Images/subbanner02.webp")} />
            </div>


        </div>
    )
}
export default Subbanner;