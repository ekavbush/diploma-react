import React from "react";
import {NavLink} from "react-router-dom";

const OurChefs = ()=>{
    return (
        <section className="our_chef_area p_100">
            <div className="container">
                <div className="row our_chef_inner">
                    <div className="col-lg-3 col-6">
                        <div className="chef_text_item">
                            <div className="main_title">
                                <h2>Наши волшебники</h2>
                                <p>Замечательная команда волшебников. Тех, кто явно и неявно создает, доставляет,
                                    вдохновляет....</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="chef_item">
                            <div className="chef_img">
                                <img className="img-fluid" src="img/chef/catchef.jpg" alt="" />
                                    <ul className="list_style">
                                        <li><NavLink to="#"><i className="fa fa-facebook-square"></i></NavLink></li>
                                    </ul>
                            </div>
                            <a href="#"><h4>Кот Тимофей</h4></a>
                            <h5>Вдохновитель, контролер и волшебник</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="chef_item">
                            <div className="chef_img">
                                <img className="img-fluid" src="img/chef/ourchef-2.jpg" alt=""/>
                                    <ul className="list_style">
                                        <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-facebook-square"></i></NavLink></li>
                                    </ul>
                            </div>
                            <a href="#"><h4>Добрый повар</h4></a>
                            <h5>Единственный и неповторимый автор всех вкусностей</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurChefs;