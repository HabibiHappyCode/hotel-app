import React from 'react'
import Links from './Links'
import { useState, useEffect } from 'react'


function Header() {

  const [active, setActive] = useState(false);
  const [ scroll, setScroll ] = useState(0);

  const onscrollFunction = (e) => {
    setScroll( window.pageYOffset )
  }
  
  useEffect(()=> {
    window.addEventListener("scroll", onscrollFunction)
  }, [])

  const toggleButton = () => {
    setActive( active => !active )
  }

  return (
    <div className='header'>
      <Links isActive={active} clickButton={toggleButton} isScrolled = { scroll >= 200} />
      { console.log(scroll >= 50) }
    </div>
  )
}

export default Header
