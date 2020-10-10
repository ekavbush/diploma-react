import React from 'react';
import {getProduct} from "../State";

const ProductDetailsTab = (props)=>{
    // let idProd = window.location.pathname.split("/")[2];
    // idProd = idProd.replaceAll("bakery", "");
    // console.log(idProd);
    // let product = getProduct(+idProd);

    return(<div className="product_tab_area">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                       role="tab" aria-controls="nav-home" aria-selected="true">Описание</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                       role="tab" aria-controls="nav-profile" aria-selected="false">Состав</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
                       role="tab" aria-controls="nav-contact" aria-selected="false">Отзывы (0)</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <p>{props.fulldescription}</p>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <p>{props.specification}</p>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <p>Очень вкусно, вернусь еще.</p>
                    <p>Я - ваш постоянный покупатель.</p>
                </div>
            </div>
        </div>

    );
}
export default ProductDetailsTab;