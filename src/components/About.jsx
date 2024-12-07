import React from 'react'
import Page from './Page'
import SecondPage from './homeComponents/SecondPage'
import Beach from './Beach'
import Reserve from './homeComponents/Reserve'
import Footer from './FooterComponents/Footer'

function About() {
  return (
    <div>
      <Page pageImg={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1733495388/pexels-pavel-danilyuk-9119786_ksheiw.jpg"} pageText={'About LaoLord'} />

      < SecondPage pic_one={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1732226075/aigipzxjkwlpsqzoic2v.jpg"} pic_two={"https://res.cloudinary.com/dxe5unu0u/image/upload/v1732226074/psvimbnqvs7xvmvw6nef.jpg"} abt={"About Us"} title={'A Luxuries Hotel with Nature'} />

      <Beach />

      <Reserve />
      <Footer />
    </div>
  )
}

export default About
