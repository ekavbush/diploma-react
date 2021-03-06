import React from "react";
import {NavLink} from "react-router-dom";

const Footer = ()=>{
    return (
        <footer className="footer_area">
            <div className="footer_widgets">
                <div className="container">
                    <div className="row footer_wd_inner">
                        <div className="col-lg-3 col-6">
                            <aside className="f_widget f_about_widget">
                                <img src="img/footer-logo.png" alt="" />
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis
                                        praesentium
                                        voluptatum deleniti atque corrupti.</p>
                                    <ul className="nav">
                                        <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                    </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-6">
                            <aside className="f_widget f_link_widget">
                                <div className="f_title">
                                    <h3>Quick links</h3>
                                </div>
                                <ul className="list_style">
                                    <li><NavLink to="#">Your Account</NavLink></li>
                                    <li><NavLink to="#">View Order</NavLink></li>
                                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                                    <li><NavLink to="#">Terms & Conditionis</NavLink></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-6">
                            <aside className="f_widget f_link_widget">
                                <div className="f_title">
                                    <h3>Мы открыты:</h3>
                                </div>
                                <ul className="list_style">
                                    <li><NavLink to="#">Понедельник – Воскресенье</NavLink></li>
                                    <li><NavLink to="#">10:00 AM – 6:00 PM</NavLink></li>
                                    <li><NavLink to="#">Работаем по предзаказу</NavLink></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-6">
                            <aside className="f_widget f_contact_widget">
                                <div className="f_title">
                                    <h3>Связаться с нами</h3>
                                </div>
                                <h4>01372.466.790</h4>
                                <p>Москва, <br/>  ул.Большой Коммунистический тупик <br/> дом 13</p>
                                <h5>Деду@деревня.com</h5>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <div className="container">
                    <div className="copyright_inner">
                        {/*<div className="float-left">*/}
                        {/*    <h5><NavLink target="_blank" to="https://www.templateshub.net">Templates Hub</NavLink></h5>*/}
                        {/*</div>*/}

                        <ul>
                            <li><h5><NavLink target="_blank" to="https://www.templateshub.net">Templates Hub</NavLink></h5></li>
                            <li><span><i className="fa fa-umbrella fa-2x"></i>  Разработка сайта: EV <i className="fa fa-sun-o fa-2x"></i></span></li>
                        </ul>

                        <div className="float-right">
                            <NavLink to="#">Purchase Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;