import React from 'react'
import Page from './Page'
import Form from './Form'
import Footer from './FooterComponents/Footer'

function Contact() {
  return (
    <div>
      <Page pageImg={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1733497198/datingscout-sm7TTdfjje8-unsplash_zusey5.jpg'}  pageText={'Get In Touch'}/>

      <Form />

      <Footer />
    </div>
  )
}

export default Contact
