import React from "react";

const PriceItem = (props)=>{
    return(
        <div className="discover_item">
            <h4>{props.name}</h4>
            <p>{props.description} <span>{props.price}</span></p>
        </div>
    );
}

export default PriceItem;