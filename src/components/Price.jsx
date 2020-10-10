import React from "react";
import PriceItem from "./PriceItem";

const Price = (props)=>{
    let products = props.getDiscoverProducts;

    let productsCounts = Object.values(products).length;
    let productsItems1 = [];
    let productsItems2 = [];
    for (let i = 0; i < productsCounts; i++) {
        if(i<productsCounts/2){
            productsItems1.push(<PriceItem
                key={i}
                name={products[i].name}
                description={products[i].description}
                price={products[i].price}
                id={products[i].id}
            />);
        }else{
            productsItems2.push(<PriceItem
                key={i}
                name={products[i].name}
                description={products[i].description}
                price={products[i].price}
                id={products[i].id}
            />);
        }
    }
    return (
        <section className="discover_menu_area">
            <div className="discover_menu_inner">
                <div className="container">
                    <div className="main_title">
                        <h2>Новинки. Прайс-лист</h2>
                        <h5>Вкусно по-домашнему</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discover_item_inner">
                                {productsItems1}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="discover_item_inner">
                                {productsItems2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;