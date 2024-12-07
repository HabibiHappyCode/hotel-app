import React from 'react'
import Address from './Address'
import Reservation from './Reservation'
import Navigation from './Navigation'

import '../../CSS/Footer.css'
import CopyRight from './CopyRight'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="box">
                <Address />
                <Reservation />
                <Navigation />
            </div>

            <CopyRight />
        </div>
    )
}

export default Footer
