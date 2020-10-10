import React from "react";

const Newsletter = ()=>{
    return(
        <section className="newsletter_area">
            <div className="container">
                <div className="row newsletter_inner">
                    <div className="col-lg-6">
                        <div className="news_left_text">
                            <h4>Отправьте нам письмо, чтобы получать информацию о специальных предложениях, распродажах и других акциях.</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="newsletter_form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Введите свой email"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Подписаться
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;