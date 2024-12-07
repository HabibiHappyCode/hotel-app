import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Rooms from './Rooms'
import About from './About'
import Contact from './Contact'

function Navbar() {
    return (
        <>
            <Routes>

                <Route path='/' element={ <Home /> } />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </>
    )
}

export default Navbar
