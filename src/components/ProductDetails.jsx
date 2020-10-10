import React from 'react';
import ProductDetailsPrice from "./ProductDetailsPrice";
import ProductDetailsTab from "./ProductDetailsTab";

const ProductDetails = ()=>{
    return(<section className="product_details_area p_100">
        <div className="container">

            <ProductDetailsPrice />
            <ProductDetailsTab />

        </div>
    </section>

    );
}
export default ProductDetails;