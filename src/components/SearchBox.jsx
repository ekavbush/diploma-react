import React from "react";

const SearchBox = ()=>{
    return(
        <div className="search_area zoom-anim-dialog mfp-hide" id="test-search">
            <div className="search_box_inner">
                <h3>Поиск</h3>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><i
                                    className="icon icon-Search"></i></button>
                            </span>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;