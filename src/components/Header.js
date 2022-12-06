import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

export default function Header() {
    const [display, setDisplay] = useState('none');
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState('block');
    const [showBtn, setShowBtn] = useState('none');
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleClick = () => {
        if(!isOpen) {
            setIsOpen(true)
            setDisplay('flex')
        }
        else if(isOpen) {
            setIsOpen(false)
            setDisplay('none')
        }
    }

    useEffect(() => {
      if(desktopMediaQuery.matches) {
        setShowMenu('none')
        setDisplay('flex')
        setShowBtn('block')
      } else {
        setShowMenu('block')
        setDisplay('none')
        setShowBtn('none')
      }
    }, [])
    
    
  return (
    <div className='Header'>
      <img className='logo' src={logo} alt='logo' />
      <img src={isOpen ? close : menu} alt='menu' onClick={handleClick} style={{display: `${showMenu}`}} />
      <ul className='toggle-menu' style={{display: `${display}`}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className='request' style={{display: `${showBtn}`}}>Request Invite</button>
    </div>
  )
}
