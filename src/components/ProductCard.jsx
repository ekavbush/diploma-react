import React from "react";

const ProductCard = (props)=>{
    return(
        <div className={props.header_class}>
            <div className="cake_feature_item">
                <div className="cake_img">
                    <img src={props.img} alt=""/>
                </div>
                <div className="cake_text">
                    <h4>{props.price}</h4>
                    <h3>{props.name}</h3>
                    <a className="pest_btn" href="#">В корзину</a>
                </div>
            </div>
        </div>
    );

}
export default ProductCard;