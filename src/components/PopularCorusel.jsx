import {NavLink} from "react-router-dom";
import React from "react";
import OwlCarousel from 'react-owl-carousel';

const PopularCorusel = ()=>{
    return(
        <div className="cake_feature_inner">
            <div className="main_title">
                <h2>Наши популярные торты</h2>
                <h5> Seldolor sit amet consect etur</h5>
            </div>
            <OwlCarousel
                className = {"owl-theme"}
                items= {"4"}
                autoplay = {"true"}
                nav = {"true"}
                loop = {"true"}
                rewind={"true"}
            />


            {/*<div className="cake_feature_slider owl-carousel owl-theme home-slider">*/}
                <div className="item">
                    {/*<div className="cake_feature_item">*/}
                        <div className="cake_img">
                            <img src="../img/cake-feature/c-feature-1.jpg" alt="" />
                        </div>
                        {/*<div className="cake_text">
                            <h4>$29</h4>
                            <h3>Strawberry Cupcakes</h3>
                            <NavLink className="pest_btn" to="#">В корзину</NavLink>
                        </div>*/}
                    {/*</div>*/}
                </div>
                <div className="item">
                    <div className="cake_feature_item">
                        <div className="cake_img">
                            <img src="../img/cake-feature/c-feature-2.jpg" alt="" />
                        </div>
                        <div className="cake_text">
                            <h4>$29</h4>
                            <h3>Strawberry Cupcakes</h3>
                            <NavLink className="pest_btn" to="#">Add to cart</NavLink>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="cake_feature_item">
                        <div className="cake_img">
                            <img src="../img/cake-feature/c-feature-3.jpg" alt="" />
                        </div>
                        <div className="cake_text">
                            <h4>$29</h4>
                            <h3>Strawberry Cupcakes</h3>
                            <NavLink className="pest_btn" to="#">Add to cart</NavLink>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="cake_feature_item">
                        <div className="cake_img">
                            <img src="../img/cake-feature/c-feature-4.jpg" alt="" />
                        </div>
                        <div className="cake_text">
                            <h4>$29</h4>
                            <h3>Strawberry Cupcakes</h3>
                            <NavLink className="pest_btn" to="#">Add to cart</NavLink>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
}

export default PopularCorusel;