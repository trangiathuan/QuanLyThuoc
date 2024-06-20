import React from "react";
import "./Carousel.css"
const Carousel = () => {
    return (
        <div className="Carousel">
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("./Images/crs01.webp")} class="d-block w-100 crsimg" />
                    </div>
                    <div class="carousel-item active">
                        <img src={require("./Images/crs02.webp")} class="d-block w-100 crsimg" />
                    </div>
                    <div class="carousel-item active">
                        <img src={require("./Images/crs03.webp")} class="d-block w-100 crsimg" />
                    </div>
                    <div class="carousel-item active">
                        <img src={require("./Images/crs04.webp")} class="d-block w-100 crsimg" />
                    </div>
                    <div class="carousel-item active">
                        <img src={require("./Images/crs05.webp")} class="d-block w-100 crsimg" />
                    </div>
                    <div class="carousel-item active">
                        <img src={require("./Images/crs06.webp")} class="d-block w-100 crsimg" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carousel;