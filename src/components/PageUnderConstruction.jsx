import React from 'react';
import {NavLink} from "react-router-dom";

const PageUnderConstruction =()=>{
    return(<section className="error_area">
            <div className="container">
                <div className="error_inner">
                    <div className="error_inner_text">
                        <h3>Oops!</h3>
                        <h4>Приносим свои извинения, данная страница находится в разработке.</h4>
                        <h5>Будем рады видеть Вас позже!</h5>
                        <NavLink className="pink_btn" to="/">Вернуться на главную</NavLink>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default PageUnderConstruction;