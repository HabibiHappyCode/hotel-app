import React, { useEffect } from 'react'
import OfferBox from './OfferBox'
import '../../CSS/Offer.css'



function Offer() {

    


    return (
        <div className='offer-container'>

            <p>
                Our Offers
            </p>

            <h1> Ongoing Offers </h1>

            <div className="offer">

                <OfferBox image={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1732226085/flwgnsr6ddyhtyirhwl5.jpg'}  />
                <OfferBox image={'https://res.cloudinary.com/dxe5unu0u/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1733272763/nick-fewings-OU_j8IVmkj4-unsplash_wlmuz1.jpg'}  />
                <OfferBox image={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1733272762/manuel-moreno-DGa0LQ0yDPc-unsplash_sj8j9c.jpg'}  />

            </div>

        </div>
    )
}

export default Offer
