import {NavLink} from "react-router-dom";
import React from "react";
import PopularCorusel from "./PopularCorusel";
import PopCarousel from "./PopularCorusel";
import Carousel from "./Carousel";

const WelcomeBakery = ()=>{
    return(
        <section className="welcome_bakery_area">
            <div className="container">
                <div className="welcome_bakery_inner p_100">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main_title">
                                <h2>Добро пожаловать к нам в Пекарню</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi consequatur uis autem vel eum.</p>
                            </div>
                            <div className="welcome_left_text">
                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
                                    it is pain, but because occasionally circumstances occur in which toil and pain can procure
                                    him some great pleasure. To take a trivial example, which of us ever undertakes laborious
                                    physical exercise.</p>
                                <NavLink className="pink_btn" to="#">Узнать больше</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcome_img">
                                <img className="img-fluid" src="../img/cake-feature/welcome-right.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
               {/*<PopularCorusel />*/}
               {/*<PopCarousel />*/}
               <Carousel />
            </div>
        </section>
    );
}

export default WelcomeBakery;