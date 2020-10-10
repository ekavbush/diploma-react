import React from 'react';

const ProductDetailsPrice = (props)=>{
    return(<div className="row product_d_price">
            <div className="col-lg-6">
                <div className="product_img"><img className="img-fluid my_img_size" src={props.img} alt=""/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="product_details_text">
                    <h4>{props.name}</h4>
                    <p>{props.description} </p>
                    <h5>Цена : <span>{props.price}</span></h5>
                    <div className="quantity_box">
                        <label htmlFor="quantity">Количество :</label>
                        <input type="text" placeholder="1" id="quantity"/>
                    </div>
                    <a className="pink_more" href="#">Добавить в корзину</a>
                </div>
            </div>
        </div>
    );
}
export default ProductDetailsPrice;
