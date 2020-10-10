import React from "react";
import {NavLink} from "react-router-dom";

const ProductCard = (props)=>{
    return(
        <div className={props.header_class}>
            <div className="cake_feature_item">
                <NavLink to={"/cake/bakery"+props.id}>
                    <div className="cake_img">
                        <img src={props.img} alt=""/>
                    </div>
                    <div className="cake_text">
                        <h4>{props.price}</h4>
                        <h3>{props.name}</h3>
                    </div>
                </NavLink>
                <a className="pest_btn" href="#">В корзину</a>
            </div>
        </div>
    );

}
export default ProductCard;