import React from "react";

const PriceItem = (props)=>{
    return(
        <div className="discover_item">
            <h4>{props.h4}</h4>
            <p>{props.description} <span>$8.99</span></p>
        </div>
    );
}

export default PriceItem;