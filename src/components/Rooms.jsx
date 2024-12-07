import React from 'react'
import Page from './Page'
import Offer from './homeComponents/Offer'
import GalleryContainer from './homeComponents/GalleryContainer'
import Reserve from './homeComponents/Reserve'
import Footer from './FooterComponents/Footer'

function Rooms() {
  return (
    <div>
      <Page pageImg={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1733487141/sara-dubler-Koei_7yYtIo-unsplash_yjobbs.jpg"} pageText={'laxaries rooms'} />
      <Offer />
      <GalleryContainer />
      <Reserve />
      <Footer />
    </div>
  )
}

export default Rooms
