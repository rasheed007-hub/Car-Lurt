import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/istockphoto-1305619898-640x640-removebg-preview.png'
import arrow_icon from '../Assets/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png'
import hero_icon from '../Assets/3d-car-with-simple-background-removebg-preview.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="hand icon" />
        </div>
        <p>colletctions</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_icon} alt="" />
      </div>
    </div>
  )
}

export default Hero

