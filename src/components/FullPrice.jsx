import React from "react";
import PriceItem from "./PriceItem";

function FullPrice(props){
    let products = props.getProducts;
    //console.log(Object.values(products));
    //console.log(Object.values(products).length);
    // let productsCounts = Object.key(prod1).length;
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
    return(
        <section className="price_list_area p_100">
            <div className="container">
                <div className="price_list_inner">
                    <div className="single_pest_title">
                        <h2>Наш прайс-лист</h2>
                        <p>Здесь Вы можете ознакомиться с полным ассортиментом нашей продукции и ценами на нее.</p>
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
                    <div className="row our_bakery_image">
                        <div className="col-md-4 col-6">
                            <img className="img-fluid" src="../img/our-bakery/bakery-1.jpg" alt=""/>
                        </div>
                        <div className="col-md-4 col-6">
                            <img className="img-fluid" src="../img/our-bakery/bakery-2.jpg" alt=""/>
                        </div>
                        <div className="col-md-4 col-6">
                            <img className="img-fluid" src="../img/our-bakery/bakery-3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FullPrice;