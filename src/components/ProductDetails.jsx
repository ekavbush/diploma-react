import React from 'react';
import ProductDetailsPrice from "./ProductDetailsPrice";
import ProductDetailsTab from "./ProductDetailsTab";
import {getProduct} from "../State";

const ProductDetails = ()=>{
    let idProd = window.location.pathname.split("/")[2];
    idProd = idProd.replaceAll("bakery", "");
    console.log(idProd);
    let product = getProduct(+idProd);//так как id с нуля

    return(<div>

        <section className="product_details_area p_100">
        <div className="container">

            <ProductDetailsPrice img={product.img}
                                 name={product.name}
                                 price={product.price}
                                description={product.description}/>
            <ProductDetailsTab fulldescription={product.fulldescription}
                                specification={product.specification}/>

        </div>
    </section>
    </div>
    );
}
export default ProductDetails;