import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const PopularCorusel = ()=>{

    return <div className="cake_feature_inner">
        <div className="main_title">
            <h2>Самая популярная выпечка</h2>
            <h5>Всегда с Вами....</h5>
        </div>
        <OwlCarousel
            className="owl-theme"
            items="4"
            autoplay
            loop
            dots
        >
            <div className="item">
                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="../img/cake-feature/c-feature-1.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>150 р.</h4>
                        <h3>Хлеб ржаной на закваске</h3>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="../img/cake-feature/c-feature-2.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>95 р.</h4>
                        <h3>Домашний синабон</h3>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="../img/cake-feature/c-feature-3.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>... р.</h4>
                        <h3>Пирог с капустой</h3>
                    </div>
                </div>
            </div>
            <div className="item">

                <div className="cake_feature_item">
                    <div className="cake_img">
                        <img src="../img/cake-feature/c-feature-4.jpg" alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>...р.</h4>
                        <h3>Морковный кекс</h3>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </div>
}

export default PopularCorusel;