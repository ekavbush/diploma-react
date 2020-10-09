import React from 'react';
import OurBakeryImgs from "./OurBakeryIMgs";

const OurBakeryIdea = ()=>{
    return(
        <section className="our_bakery_area p_100">
            <div className="container">
                <div className="our_bakery_text">
                    <h2>Our Bakery Approach </h2>
                    <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.</h6>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem.</p>
                </div>
                <OurBakeryImgs />
            </div>
        </section>
    );
}
export default OurBakeryIdea;