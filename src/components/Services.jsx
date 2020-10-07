import React from "react";
import ServiceItem from "./ServiceItem";

const Services = ()=>{
    return (
        <section className="service_area">
            <div className="container">
                <div className="single_w_title">
                    <h2>Основные услуги, которые мы предоставляем</h2>
                </div>
                <div className="row service_inner">
                    <ServiceItem h4={"Сладкая выпечка"} icon={"flaticon-food-2"} description={"К молоку и чаю, для комнании или утреннего кофе."}/>
                    <ServiceItem h4={"Пироги"} icon={"flaticon-food-1"} description={"Сытный, ароматный пирог для большой компании."}/>
                    <ServiceItem h4={"Хлеб"} icon={"flaticon-food"} description={"Домашний хлеб. Без химии, только мука, вода и соль."}/>
                </div>
            </div>
        </section>
    );
}

export default Services;