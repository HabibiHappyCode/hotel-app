import React from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Navigation.css'

function Navigation() {
    return (
        <div className='navigation-container'>
            <h2>navigation</h2>

            <div className="nav-box">
                <ul>
                    <li> <Link to='/'> home </Link> </li>
                    <li> <Link to='/rooms'> rooms </Link> </li>
                    <li> <Link to='/about'> about </Link> </li>
                    <li> <Link to='/contact'> contact </Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
