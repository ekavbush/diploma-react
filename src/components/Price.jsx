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
                                <PriceItem h4={"Брауни"} description={"Насыщенный шоколадный крем в шоколадном бисвите"}/>
                                <PriceItem h4={"Морковный кекс"} description={"Сочный бисквит из моркови"}/>
                                <PriceItem h4={"Двойной шоколадный пай"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "}/>
                                <PriceItem h4={"Имбирный пряник"} description={"Пряник на меду с добавлением имбиря, корицы, мускатного ореха"}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="discover_item_inner">
                                <PriceItem h4={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "}/>
                                <PriceItem h4={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "}/>
                                <PriceItem h4={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "}/>
                                <PriceItem h4={"Double Chocolate Pie"} description={"Chocolate puding, vanilla, fruite rasberry jam milk "}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;