import React from 'react'
import Slides from './homeComponents/Slides'
import SecondPage from './homeComponents/SecondPage'
import Offer from './homeComponents/Offer'
import GalleryContainer from './homeComponents/GalleryContainer'
import Reserve from './homeComponents/Reserve'
import Footer from './FooterComponents/Footer'


function Home() {
  return (
    <>
      <Slides />

      <SecondPage pic_one={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1732226075/aigipzxjkwlpsqzoic2v.jpg"} pic_two={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1732226074/psvimbnqvs7xvmvw6nef.jpg"} abt={"About Us"} title={'A Luxuries Hotel with Nature'} />

      <Offer />

      <SecondPage pic_one={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1733357369/louis-hansel-93ccfD84tCA-unsplash_akkyrq.jpg"} pic_two={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1733357837/karol-chomka-69qcb2lGfcg-unsplash_yp0kbo.jpg"} abt={"Delicious Food"} title={'We Serve Fresh and Delicious Food'} />

      <GalleryContainer />

      <Reserve />

      <Footer />
    </>
  )
}

export default Home
