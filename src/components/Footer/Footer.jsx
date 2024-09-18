import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and 
                culinary expertise. Our mission is to satisfy your cravings and 
                elevate your dining experience, on delicious meat at a time.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+961 12345678</li>
                    <li>joeDoe@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer