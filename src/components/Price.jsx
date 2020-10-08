import React from "react";
import PriceItem from "./PriceItem";

const Price = ()=>{
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
                                <PriceItem name={"Брауни"} description={"Насыщенный шоколадный крем в шоколадном бисвите"} price={"$8.99"}/>
                                <PriceItem name={"Морковный кекс"} description={"Сочный бисквит из моркови"} price={"$8.99"}/>
                                <PriceItem name={"Двойной шоколадный пай"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "} price={"$8.99"}/>
                                <PriceItem name={"Имбирный пряник"} description={"Пряник на меду с добавлением имбиря, корицы, мускатного ореха"} price={"$8.99"}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="discover_item_inner">
                                <PriceItem name={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "} price={"$8.99"}/>
                                <PriceItem name={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "} price={"$8.99"}/>
                                <PriceItem name={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "} price={"$8.99"}/>
                                <PriceItem name={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "} price={"$8.99"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;