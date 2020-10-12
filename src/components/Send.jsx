import React from "react";
import {NavLink} from "react-router-dom";

const Send = ()=>{
    return(<section className="error_area">
            <div className="container">
                <div className="error_inner">
                    <div className="error_inner_text">
                        <h4>Ваше письмо отправлено!.</h4>
                        <h5>Спасибо!</h5>
                        <NavLink className="pink_btn" to="/">Вернуться на главную</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Send;