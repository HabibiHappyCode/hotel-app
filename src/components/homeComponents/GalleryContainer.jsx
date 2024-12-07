import React from 'react'
import '../../CSS/GalleryContainer.css'
import Gallery from './Gallery'

function GalleryContainer() {
  return (
    <div className='gallery-container'>
        <p>
            featured rooms
        </p>

        <h1>
            choose a better room
        </h1>

        <div className="galleries">
            <Gallery img = {'https://res.cloudinary.com/dxe5unu0u/image/upload/v1733360869/pexels-jvdm-1457842_jdriqb.jpg'} name = {'superior room'}/>
            <Gallery img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1733360869/pexels-pixabay-259580_xt7oxo.jpg'} name = {'deluxe room'}/>
            <Gallery img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1733360869/pexels-kampus-7556613_j2ylbp.jpg'} name = {'signature room'}/>
            <Gallery img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1733360869/pexels-pixabay-259962_hxtvma.jpg'} name = {'couple room'} />
        </div>
    </div>
  )
}

export default GalleryContainer
