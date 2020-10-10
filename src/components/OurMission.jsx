import React from 'react';
import {NavLink} from "react-router-dom";

const OurMission = ()=>{
    return(
        <section className="our_mission_area p_100">
            <div className="container">
                <div className="row our_mission_inner">
                    <div className="col-lg-3">
                        <div className="single_m_title">
                            <h2>Наша миссия</h2>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="mission_inner_text">
                            <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudan-tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.</h6>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                                qui dolorem eum fugiat quo voluptas nulla pariatu</p>
                            <ul className="nav">
                                <li><NavLink to="/cake">Сладкая выпечка</NavLink></li>
                                <li><NavLink to="/cake">Хлеб</NavLink></li>
                                <li><NavLink to="/cake">Выпечка</NavLink></li>
                                <li><NavLink to="/cake">Интересное</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurMission;