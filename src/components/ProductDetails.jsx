import React from 'react';
import ProductDetailsPrice from "./ProductDetailsPrice";
import ProductDetailsTab from "./ProductDetailsTab";
import {getProduct} from "../State";
import BannerAria from "./BannerAria";
import {BrowserRouter} from "react-router-dom";

const ProductDetails = ()=>{
    //console.log(window.location.pathname);
    let idProd = window.location.pathname.split("/")[2];
    idProd = idProd.replaceAll("bakery", "");
    //console.log(idProd);
    let product = getProduct(+idProd);

    return(<div>
        {/*return(<div style={{backgroundColor: 'Silver'}}>        */}
            {/*<BannerAria h3={product.name} link={"/cake"} name={"Наша выпечка"}/>*/}
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