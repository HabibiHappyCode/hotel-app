import React, { useEffect } from 'react'
import '../../CSS/OfferBox.css'

// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function OfferBox({ image }) {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className='offerBox-container' data-aos="fade-up">
            <div className="pic">
                <img src={image} alt="" />
            </div>

            <h2>
                Up to 35% savings on Club
                rooms and Suites
            </h2>

            <ul>
                <li>Luxaries condition</li>
                <li><sub>3</sub> Adults & <sub>2</sub> Children size</li>
                <li>sea view side</li>
            </ul>

            <button>book now</button>
        </div>
    )
}

export default OfferBox
