import React from "react";

const CakeItem = (props)=>{
    return(
        <div className="col-lg-4 col-md-4 col-6">
            <div className="cake_feature_item">
                <div className="cake_img">
                    <img src={props.img} alt=""/>
                </div>
                <div className="cake_text">
                    <h4>{props.h4}</h4>
                    <h3>{props.h3}</h3>
                    <a className="pest_btn" href="#">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default CakeItem;