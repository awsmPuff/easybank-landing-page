import React from 'react'
// import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import youtube from '../assets/icon-youtube.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

export default function Footer() {
  return (
    <div className='Footer'>
      <section>
        {/* <img className='logo' src={logo} alt='logo' /> */}
        <div className='icons'>
          <img src={facebook} alt='facebook' />
          <img src={youtube} alt='youtube' />
          <img src={twitter} alt='twitter' />
          <img src={pinterest} alt='pinterest' />
          <img src={instagram} alt='instagram' />
        </div>
      </section>
      <section>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
      </section>
      <section className='thirdSe'>
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </section>
      <section className='last'>
        <button className='request'>Request Invite</button>
        <span>© Easybank. All Rights Reserved</span>
      </section>
    </div>
  )
}
