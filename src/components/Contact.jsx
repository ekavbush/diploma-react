import React from "react";

const Contact =()=>{
    return(<section className="contact_form_area p_100">
            <div className="container">
                <div className="main_title">
                    <h2>Контакты для связи</h2>
                    <h5>Вам есть, что нам сказать? Скорее свяжитесь с нами!.</h5>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <form className="row contact_us_form"
                              action="php/sendMail.php"
                              method="post" id="contactForm" noValidate="novalidate">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="name" name="name"
                                       placeholder="Ваше имя"/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="email" name="email"
                                       placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="subject" name="subject"
                                       placeholder="Тема"/>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea className="form-control" name="message" id="message" rows="1"
                                          placeholder="Введите сообщение"></textarea>
                            </div>
                            <div className="form-group col-md-12">
                                <button type="submit" value="submit" className="btn order_s_btn form-control">Отпавить письмо
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-4 offset-md-1">
                        <div className="contact_details">
                            <div className="contact_d_item">
                                <h3>Адрес :</h3>
                                <p>Москва, <br/>  ул.Большой Коммунистический тупик <br/> дом 13</p>
                            </div>
                            <div className="contact_d_item">
                                <h5>Телефон : <a href="tel:01372466790">01372.466.790</a></h5>
                                {/*<h5>Email : <a href="mailto:rockybd1995@gmail.com">rockybd1995@gmail.com</a></h5>*/}
                                <h5>Email : <a href="">Деду@деревня.com</a></h5>
                            </div>
                            <div className="contact_d_item">
                                <h3>Мы открыты :</h3>
                                <p>10:00 AM – 6:00 PM</p>
                                <p>Понедельник – Воскресенье</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;