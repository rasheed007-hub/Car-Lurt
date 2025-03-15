import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums