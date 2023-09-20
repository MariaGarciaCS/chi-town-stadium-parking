import React from 'react'
import './Nav.css'
import Star from '../assets/star.webp'

function Nav() {
  return (
    <div className='nav-container'>
        <div className="stars" id="stars-left">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
        </div>
        <div className="nav-title">
            <h1>Chi-Town Stadium Parking</h1>
        </div>
        <div className="stars" id="stars-right">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
        </div>
    </div>
  )
}

export default Nav