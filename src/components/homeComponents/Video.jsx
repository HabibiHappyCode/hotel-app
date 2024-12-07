import React from 'react'
import YouTube from 'react-youtube'
import '../../CSS/Video.css'

function Video() {

    const opts = {
        playerVars: {
            autoplay: 1,
            height: '500'
        }
    }

    return (
        <div className='video-container'>
            <YouTube videoId="o9cXlEQVDPk" opts={opts} className='video' />
        </div>
    )
}

export default Video
