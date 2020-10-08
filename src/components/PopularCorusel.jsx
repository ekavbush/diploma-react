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
            {/*<OwlCarousel*/}
            {/*    className="owl-theme"*/}
            {/*    items="1"*/}
            {/*    autoplay*/}
            {/*    loop*/}
            {/*/>*/}
            {/*<div className="cake_feature_slider owl-carousel owl-theme home-slider">*/}
                <div className="item">
                    <div className="cake_feature_item">
                        <div className="cake_img">
                            <img src="../img/cake-feature/c-feature-1.jpg" alt="" />
                        </div>
                        <div className="cake_text">
                            <h4>$29</h4>
                            <h3>Strawberry Cupcakes</h3>
                            <NavLink className="pest_btn" to="#">В корзину</NavLink>
                        </div>
                    </div>
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

// const PopCarousel = ()=>{
//     return(
//         <div className="cake_feature_inner">
//             <div className="main_title">
//                 <h2>Наши популярные торты</h2>
//                 <h5> Seldolor sit amet consect etur</h5>
//             </div>
//             <div id="carouselExampleCaptions" className="carousel slide cake_feature_slider" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                     <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
//                     <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//                     <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//                     <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active cake_feature_item">
//                         <img src="../img/cake-feature/c-feature-4.jpg" className="cake_img" alt="..."/>
//                             <div className="carousel-caption d-none d-md-block cake_text">
//                                 {/*<h5>Strawberry Cupcakes</h5>*/}
//                                 {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
//                                 <h4>$29</h4>
//                                 <h3>Strawberry Cupcakes</h3>
//                                 {/*<NavLink className="pest_btn" to="#">Add to cart</NavLink>*/}
//                             </div>
//                     </div>
//                     <div className="carousel-item cake_feature_item">
//                         <img src="../img/cake-feature/c-feature-3.jpg" className="cake_img" alt="..."/>
//                             <div className="carousel-caption d-none d-md-block cake_text">
//                                 {/*<h5>Second slide label</h5>*/}
//                                 {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
//                                 <h4>$29</h4>
//                                 <h3>Strawberry Cupcakes</h3>
//                                 {/*<NavLink className="pest_btn" to="#">Add to cart</NavLink>*/}
//                             </div>
//                     </div>
//                     <div className="carousel-item cake_feature_item">
//                         <img src="../img/cake-feature/c-feature-2.jpg" className="cake_img" alt="..."/>
//                             <div className="carousel-caption d-none d-md-block cake_text">
//                                 {/*<h5>Third slide label</h5>*/}
//                                 {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
//                                 <h4>$29</h4>
//                                 <h3>Strawberry Cupcakes</h3>
//                                 {/*<NavLink className="pest_btn" to="#">Add to cart</NavLink>*/}
//                             </div>
//                     </div>
//                     <div className="carousel-item cake_feature_item">
//                         <img src="../img/cake-feature/c-feature-1.jpg" className="cake_img" alt="..."/>
//                         <div className="carousel-caption d-none d-md-block cake_text">
//                             {/*<h5>Third slide label</h5>*/}
//                             {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
//                             <h4>$29</h4>
//                             <h3>Strawberry Cupcakes</h3>
//                             {/*<NavLink className="pest_btn" to="#">Add to cart</NavLink>*/}
//                         </div>
//                     </div>
//                 </div>
//                 <NavLink className="carousel-control-prev" to="#carouselExampleCaptions" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </NavLink>
//                 <NavLink className="carousel-control-next" to="#carouselExampleCaptions" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </NavLink>
//             </div>
//         </div>
//     );
// }

export default PopularCorusel;
// export default PopCarousel;