import {NavLink} from "react-router-dom";
import React from "react";
import PopularCorusel from "./PopularCorusel";

const WelcomeBakery = ()=>{
    return(
        <section className="welcome_bakery_area">
            <div className="container">
                <div className="welcome_bakery_inner p_100">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main_title">
                                <h2>Мы всегда Вам рады</h2>
                                <p>Любите домашнюю ароматную выпечку или хлеб? Но у Вас нет сил, времени или желания делать это самостоятельно?
                                    Рады будем Вам помочь!
                                </p>
                            </div>
                            <div className="welcome_left_text">
                                <p>Уважаемые любители нежнейших ароматов выпечки, мы рады помочь Вам накормить семью вкусным
                                    и ароматным бездрожжевым ржаным хлебом. Такой хлебушек может храниться неделю! Если конечно,
                                    у Вас хватит сил его хранить.<br/>
                                    Хотите порадовать себя или близких домашним синабоном? Пирогом с капустой? Тогда Вам к нам!
                                    С полным ассортиментом нашей волшебной выпечки Вы можете ознакомится на данном сайте!
                                </p>
                                <NavLink className="pink_btn" to="#">Узнать больше</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcome_img">
                                <img className="img-fluid" src="../img/cake-feature/portfolio-7.jpg" alt="" />
                                <img className="img-fluid" src="../img/cake-feature/portfolio-5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
               <PopularCorusel />
            </div>
        </section>
    );
}

export default WelcomeBakery;