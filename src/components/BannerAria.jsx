import React from "react";
import {NavLink} from "react-router-dom";

const BannerAria = (props)=>{
    return (
        <section className="banner_area">
            <div className="container">
                <div className="banner_text">
                    <h3>{props.h3}</h3>
                    <ul>
                        <li><NavLink to="index.html">Главная</NavLink></li>
                        <li><NavLink to={props.link}>{props.name}</NavLink></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default BannerAria;