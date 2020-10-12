import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import ProductCard from "./ProductCard";

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    loop: true,
    responsive: {
        0: {items: 1},
        400: {items: 1},
        600: {items: 2},
        700: {items: 3}
    }
};
const PopularCorusel = ()=>{

    return <div className="cake_feature_inner">
        <div className="main_title">
            <h2>Самая популярная выпечка</h2>
            <h5>Всегда с Вами....</h5>
        </div>
        <OwlCarousel
            className="owl-theme"
            // items="4"
            // autoplay
            // loop
            // dots
            {...options}
        >
            <div className="item">
                <ProductCard
                    name={"Хлеб ржаной на закваске"}
                    img={"../img/cake-feature/bakery6.jpg"}
                    price={"150 р."}
                    header_class={"cake_feature_item"}
                    id={"1"}
                />
            </div>
            <div className="item">
                <ProductCard
                    name={"Домашний синабон"}
                    img={"../img/cake-feature/bakery1.jpg"}
                    price={"95 р."}
                    header_class={"cake_feature_item"}
                    id={"2"}
                />
            </div>
            <div className="item">
                <ProductCard
                    name={"Пирог с капустой"}
                    img={"../img/cake-feature/bakery3.jpg"}
                    price={"... р."}
                    header_class={"cake_feature_item"}
                    id={"5"}
                />
            </div>
            <div className="item">
                <ProductCard
                    name={"Кефирный хлеб"}
                    img={"../img/cake-feature/bakery4.jpg"}
                    price={"100 р."}
                    header_class={"cake_feature_item"}
                    id={"4"}
                />
            </div>
        </OwlCarousel>
    </div>
}

export default PopularCorusel;