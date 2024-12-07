import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../CSS/Links.css'



function Links({ isActive, clickButton, isScrolled }) {


    return (
        <>
            <div className={`navbar ${isScrolled ? 'fixed' : ''}`} >


                <Link to='/'>
                    <div className="logo">
                        <div className="img">
                            <img src='https://res.cloudinary.com/dxe5unu0u/image/upload/v1732225659/mylogo.png' alt="" />
                        </div>
                        <div className="name">
                            <h1>laolord</h1>
                        </div>
                    </div>
                </Link>



                <ul className={isActive ? 'active' : ''}>
                    <li> <Link to='/'> home </Link> </li>
                    <li> <Link to='/rooms'> rooms </Link> </li>
                    <li> <Link to='/about'> about </Link> </li>
                    <li> <Link to='/contact'> contact </Link> </li>
                </ul>


                <div className={` hamburger ${isActive ? 'active' : ''}`} onClick={clickButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <Navbar />
        </>
    )
}

export default Links
