import {NavLink} from "react-router-dom";
import React from "react";

const SpecialRecipes = ()=>{
    return(
        <section className="special_recipe_area">
            <div className="container">
                <div className="special_recipe_slider owl-carousel">
                    <div className="item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/recipe/recipe-1.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Special Recipe</h4>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi equatur uis autem vel eum.</p>
                                <NavLink className="w_view_btn" to="#">Посмотреть детали</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/recipe/recipe-1.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Special Recipe</h4>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi equatur uis autem vel eum.</p>
                                <NavLink className="w_view_btn" to="#">Посмотреть детали</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/recipe/recipe-1.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Special Recipe</h4>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi equatur uis autem vel eum.</p>
                                <NavLink className="w_view_btn" to="#">Посмотреть детали</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/recipe/recipe-1.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Special Recipe</h4>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi equatur uis autem vel eum.</p>
                                <NavLink className="w_view_btn" to="#">Посмотреть детали</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialRecipes;