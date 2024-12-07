import React from 'react'
import '../CSS/Page.css'

function Page({ pageImg, pageText }) {
    return (
        <div className='page-container'>
            <img src={pageImg} alt="" />

            <div className="content">
                <h1>{ pageText }</h1>
            </div>
        </div>
    )
}

export default Page
