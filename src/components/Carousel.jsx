import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Carousel() {
    return <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        loop
    >
        <div className="item">
            <div className="site-blocks inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(../img/cake-feature/c-feature-1.jpg)"}}>
                <div className="container">
                    {/*<div className="row align-items-center justify-content-center">*/}
                        <div className="col-md-6" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Заголовок 1</h1>
                            <span className="caption d-block">
                                <h4>$29</h4>
//                              <h3>Strawberry Cupcakes</h3>
                            </span>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="item">
            <div className="site-blocks inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(../img/cake-feature/c-feature-2.jpg)"}}>
                <div className="container">
                    {/*<div className="row align-items-center justify-content-center">*/}
                        <div className="col-md-7 text-center" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Strawberry Cupcakes</h1>
                            <span className="caption d-block">
                                <h4>$29</h4>
//                              <h3></h3>
                            </span>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="item">
            <div className="site-blocks inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(../img/cake-feature/c-feature-3.jpg)"}}>
                <div className="container">
                    {/*<div className="row align-items-center justify-content-center">*/}
                        <div className="col-md-7 text-center" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Заголовок 2</h1>
                            <span className="caption d-block">
                                <h4>$29</h4>
//                              <h3>Strawberry Cupcakes</h3>
                            </span>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="item">
            <div className="site-blocks-cover inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(../img/cake-feature/c-feature-4.jpg)"}}>
                <div className="container">
                    {/*<div className="row align-items-center justify-content-center">*/}
                        <div className="col-md-7 text-center" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Заголовок 2</h1>
                            <span className="caption d-block">
                                <h4>$29</h4>
//                              <h3>Strawberry Cupcakes</h3>
                            </span>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </OwlCarousel>
}

export default Carousel;