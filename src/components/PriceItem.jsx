import React from "react";
import {NavLink} from "react-router-dom";

const PriceItem = (props)=>{
    return(
        <div className="discover_item">
            <NavLink to={"/cake/bakery"+props.id}>
            <h4>{props.name}</h4>
            <p>{props.description} <span>{props.price}</span></p>
            </NavLink>
        </div>
    );
}

export default PriceItem;