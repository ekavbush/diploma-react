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

function App() {
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
                      <Price />
                      <ClientSays />
                      <OurChefs />
                  </div>
          }}/>
          <Route path="/menu" render={()=>{
                return <div>
                    <BannerAria h3={"Прайс-Лист"} link={"/menu"} name={"Прайс-лист"}/>
                    <Price />
                </div>
          }}/>
          <Route path="/shop" render={()=>{
                return <div>
                    <BannerAria h3={"Магазин"} link={"/shop"} name={"Магазин"}/>

                </div>
          }}/>
          <Footer />
          <SearchBox />

        </BrowserRouter>
      </div>
    
  );
}

export default App;
