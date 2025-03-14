import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/Instagram_icon-removebg-preview (1).png'
import pintester_icon from '../Assets/images-removebg-preview.png'
import whatsapp_icon from '../Assets/images__1_-removebg-preview.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <p>CAR LURT</p>
        </div>
        <ul className='footer_links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_socail_icon">
            <div className="footer_icon_container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>copyright @ 2025 - All Right Receved.</p>
        </div>
    </div>
  )
}

export default Footer