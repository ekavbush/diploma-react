import React from "react";

const ServiceItem = (props)=>{
    return(
        <div className="col-lg-4 col-6">
            <div className="service_item">
                <i className={props.icon}></i>
                <h4>{props.h4}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ServiceItem;