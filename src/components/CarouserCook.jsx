import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';
import slider1 from "../img/home-slider/slider-8.jpg";
import slider2 from "../img/home-slider/slider-5.jpg";
import slider3 from "../img/home-slider/slider-4.jpg";

const Carousel_1 =()=>{
    return (
        <OwlCarousel
            className="owl-theme"
            loop margin={3} nav
        >
            <div className="item">
                    <img src={slider1} alt=""/>
            </div>
            <div className="item">
                    <img src={slider2} alt=""/>
            </div>
            <div className="item">
                    <img src={slider3} alt=""/>
            </div>
        </OwlCarousel>
    );
}
export default Carousel_1;