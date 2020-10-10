import React from 'react';

const ProductDetailsPrice = ()=>{
    return(<div className="row product_d_price">
            <div className="col-lg-6">
                <div className="product_img"><img className="img-fluid" src="../img/product/product-details-1.jpg" alt=""/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="product_details_text">
                    <h4>Brown Cake</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ
                        untur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, </p>
                    <h5>Price :<span>$24.5</span></h5>
                    <div className="quantity_box">
                        <label htmlFor="quantity">Quantity :</label>
                        <input type="text" placeholder="1" id="quantity"/>
                    </div>
                    <a className="pink_more" href="#">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}
export default ProductDetailsPrice;
