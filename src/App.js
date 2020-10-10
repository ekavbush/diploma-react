import React from 'react';

import './App.css';
import Header from "./components/Header";
import {BrowserRouter, NavLink,Route} from "react-router-dom";
import MainSlider from "./components/MainSlider";
import BannerAria from "./components/BannerAria";
import Services from "./components/Services";
import Price from "./components/Price";
import ClientSays from "./components/ClientSays";
import OurChefs from "./components/OurChefs";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import WelcomeBakery from "./components/WelcomeBakery";
import SpecialRecipes from "./components/SpecialRecipes";
import Newsletter from "./components/Newsletter";
import {getProducts} from "./State";
import FullPrice from "./components/FullPrice";
import OurMission from "./components/OurMission";
import OurBakeryIdea from "./components/OurBakeryIdea";
import Error from "./components/Error";
import PageUnderConstruction from "./components/PageUnderConstruction";
import ProductsCatalog from "./components/ProductsCatalog";
import ProductDetails from "./components/ProductDetails";
import Carousel_1 from "./components/CarouserCook";


function App(props) {
  return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" render={()=>{
                  return <div>
                      <BannerAria h3={"Главная"} link={"#"} name={"Главная"}/>
                      <WelcomeBakery />
                      <SpecialRecipes />
                      <Services />
                      <Price getDiscoverProducts={props.getDiscoverProducts}/>
                      <ClientSays />
                      <OurChefs />
                  </div>
          }}/>
          <Route path="/cake" render={()=>{
                return <div>
                    <BannerAria h3={"Наша выпечка"} link={"/cake"} name={"Наши вкусности"}/>
                    <ProductsCatalog getProducts={props.getProducts}/>
                </div>
          }}/>
          <Route path="/menu" render={()=>{
                return <div>
                    <BannerAria h3={"Прайс-Лист"} link={"/menu"} name={"Прайс-лист"}/>
                    <FullPrice getProducts={props.getProducts} />
                </div>
          }}/>
          <Route path="/about-us" render={()=>{
                return <div>
                    <BannerAria h3={"Немного о нас"} link={"/about-us"} name={"О нас"}/>
                    <OurBakeryIdea />
                    <OurMission />
                    <ClientSays />
                    <OurChefs />
                </div>
          }}/>
            <Route path="/our-team" render={()=>{
                return <div>
                    <BannerAria h3={"Наша команда"} link={"/our-team"} name={"Наши волшебники"}/>
                    <OurChefs />
                </div>
            }}/>
            <Route path="/shop" render={()=>{
                return <div>
                    <BannerAria h3={"Магазин"} link={"/shop"} name={"Магазин"}/>
                    <PageUnderConstruction />
                </div>
            }}/>
            {/*<Route path="/product-details" render={()=>{*/}
            {/*    return <div>*/}
            {/*        <BannerAria h3={"Карточка товара"} link={"/product-details"} name={"Карточка товара"}/>*/}
            {/*        <ProductDetails />*/}
            {/*    </div>*/}
            {/*}}/>*/}
            <Route path="/cart" render={()=>{
                return <div>
                    <BannerAria h3={"Корзина"} link={"/cart"} name={"Корзина"}/>
                    <PageUnderConstruction />
                </div>
            }}/>
            <Route path="/contact" render={()=>{
                return <div>
                    <BannerAria h3={"Наши контакты"} link={"/contact"} name={"Наши контакты"}/>
                    <PageUnderConstruction />
                </div>
            }}/>
            <Route exact path="/cake/:bakery" render={()=>
                <ProductDetails/>
            }/>
          <Newsletter />
          <Footer />
          <SearchBox />

        </BrowserRouter>
      </div>
    
  );
}

export default App;
