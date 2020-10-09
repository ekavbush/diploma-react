import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const ClientSays =()=>{
    return (
        <section className="client_says_area p_100">
            <div className="container">
                <div className="client_says_inner">
                    <div className="c_says_title">
                        <h2>Клиенты о нас...</h2>
                    </div>
                    <OwlCarousel
                        className="owl-theme"
                        items="1"
                        autoplay
                        loop
                        dots
                    >
                        <div className="item">
                            <div className="media">
                                <div className="d-flex">
                                    <img src="../img/client/client-1.png" alt="" />
                                </div>
                                <div className="media-body">
                                    <p>Ржаной хлеб просто великолепен. Вкуснее встречать не приходилось.</p>
                                    <h5> - Василий Неизвестный</h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="d-flex">
                                    <img src="../img/client/client-2.png" alt="" />
                                </div>
                                <div className="media-body">
                                    <p> Когда хочется побаловать семью, беру капустный пирог. А для праздников или встреч с
                                          друзьями - булочки с корицей. Не остается ни крошки</p>
                                    <h5>Жанна Дарк</h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="d-flex">
                                    <img src="../img/client/client-1.png" alt="" />
                                </div>
                                <div className="media-body">
                                    <p>Когда хочу побаловать дочку, покупаю бискотти! Она его обажает и всегда радуется!</p>
                                    <h5>Антонио Гауди</h5>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}

export default ClientSays;