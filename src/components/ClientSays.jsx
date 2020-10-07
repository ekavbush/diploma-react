import React from "react";

const ClientSays =()=>{
    return (
        <section className="client_says_area p_100">
            <div className="container">
                <div className="client_says_inner">
                    <div className="c_says_title">
                        <h2>Клиенты о нас...</h2>
                    </div>

                        <div className="item">
                            <div className="media">
                                <div className="d-flex">
                                    <img src="img/client/client-1.png" alt="" />
                                    <h3>“</h3>
                                </div>
                                <div className="media-body">
                                    <p> Ржаной хлеб просто великолепен. Вкуснее встречать не приходилось.</p>
                                    <h5>- Василий Неизвестный</h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="d-flex">
                                    <img src="img/client/client-1.png" alt="" />
                                </div>
                                <div className="media-body">
                                    <p>Когда хочется побаловать семью, беру капустный пирог. А для праздников или встреч с
                                        друзьями - булочки с корицей. Не остается ни крошки</p>
                                    <h5>- Жанна Дарк</h5>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    );
}

export default ClientSays;