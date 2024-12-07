import React from 'react'
import '../../CSS/SecondPage.css'

import { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function SecondPage({ pic_one, pic_two, abt, title }) {

    useEffect(() => {
        AOS.init({
          duration: 900,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div>
            <div className="second-container">

                <div className="first" data-aos="fade-right">
                    <p>{abt}</p>

                    <h1>
                       {title}
                    </h1>

                    <p>
                        Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
                    </p>

                    <p>
                        Learn More
                    </p>
                </div>

                <div className="second" data-aos="fade-left">
                    <img src = {pic_one} alt="" />

                    <img src= {pic_two} alt="" />
                </div>

            </div>
        </div>
    )
}

export default SecondPage
