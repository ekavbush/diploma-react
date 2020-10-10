import React from 'react';
import {NavLink} from "react-router-dom";
import TemporaryMessage from "./TemporaryMessage";


const Top_Header = ()=>{
    return(
        <div className="top_header_area row m0">
            <div className="container">
                <TemporaryMessage/>
                <div className="float-right">
                    <ul className="h_social list_style">
                        <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                        <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                    </ul>
                    <ul className="h_search list_style">
                        <li className="shop_cart"><NavLink to="#"><i className="lnr lnr-cart"></i></NavLink></li>
                        <li><NavLink className="popup-with-zoom-anim" to="#test-search"><i className="fa fa-search"></i></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Top_Header;