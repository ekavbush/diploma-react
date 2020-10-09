import React from 'react';

import Top_Header from "./Top_Header";
import {NavLink} from "react-router-dom";

const Header = ()=>{
    return (
        <header className="main_header_area">
            <Top_Header />
            <div className="main_menu_area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/">
                            <img src="../img/logo.png" alt="" />
                            <img src="../img/logo-2.png" alt="" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="my_toggle_menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li><NavLink to="/">Главная</NavLink></li>
                                <li><NavLink to="/cake">Наша выпечка</NavLink></li>
                                <li><NavLink to="/menu">Прайс-лист</NavLink></li>
                                <li className="dropdown submenu">
                                    <NavLink className="dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                                       aria-haspopup="true" aria-expanded="false">О нас</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/about-us">О нас</NavLink></li>
                                        <li><NavLink to="/our-team">Наша команда</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end">
                                <li className="dropdown submenu">
                                    <NavLink className="dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                                       aria-haspopup="true" aria-expanded="false">Магазин</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/shop">Магазин</NavLink></li>
                                        <li><NavLink to="/product-details">Карточка товара</NavLink></li>
                                        <li><NavLink to="/cart">Корзина</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/contact">Наши контакты</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;