import React from 'react'
import './Offers.css'
import excilsive_image from '../Assets/3d-car-with-simple-background__1_-removebg-preview.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h1>Exculsive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers_right">
            <img src={excilsive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers