import React from "react";
import PriceItem from "./PriceItem";
import ProductCard from "./ProductCard";
import {Route} from "react-router-dom";
import ProductDetails from "./ProductDetails";
import BannerAria from "./BannerAria";

const ProductsCatalog = (props)=>{
    console.log(window.location.pathname);
    let products = props.getProducts;
    //console.log(Object.values(products));
    //console.log(Object.values(products).length);
    // let productsCounts = Object.key(prod1).length;
    let productsCounts = Object.values(products).length;
    let productsItems = [];

    for (let i = 0; i < productsCounts; i++) {
        productsItems.push(<ProductCard
            key={i}
            name={products[i].name}
            img={products[i].img}
            price={products[i].price}
            id = {products[i].id}
            header_class={"col-lg-3 col-md-4 col-6"}
        />);
    }
    return(<div>

            <section className="our_cakes_area p_100">
                <Route exact path="/cake" render={()=>{
                    return <div className="container">
                        <div className="main_title">
                            <h2>Наша продукция</h2>
                            <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.</h5>
                        </div>
                        <div className="cake_feature_row row">
                            {productsItems}
                        </div>
                    </div>
                }}/>

                {/*<Route exact path="/cake/:bakery" render={()=>*/}
                {/*    <ProductDetails />*/}
                {/*}/>*/}
            </section>
        </div>
    );
}
export default ProductsCatalog;