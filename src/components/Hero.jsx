import React from 'react'
import mockup from '../assets/image-mockups.png'

export default function Hero() {
  return (
    <div className='Hero'>
      <div className='showcase'>
        <img className='mockup' src={mockup} alt='mockup' />
      </div>
      <div className='intro'>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>
        <button className='request'>Request Invite</button>
      </div>
    </div>
  )
}
