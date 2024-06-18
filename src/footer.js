import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoYoutube } from 'react-icons/bi'
import { RiFacebookFill } from 'react-icons/ri'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>

    <div className='container'>
            <div className='about'>
                
                <div className='detail'>
                    <div className='logo'>
                        <img src='img/LMlogo.png' alt='logo' width={80}>

                        </img>
                        <p>A designer and developer that create high quality Applications and Websites using the latest tech stack...</p>
                    </div>
                </div>
                <div className='icon'>
                    <li><RiFacebookFill/></li>
                    <li><AiOutlineInstagram/></li>
                    <li><AiOutlineTwitter/></li>
                    <li><BiLogoYoutube/></li>
                </div>
            </div>
        </div>
        
        <div className='account'>
            <h3>Account</h3>
            <ul>
                <li>Cart</li>
                <li>Order</li>
                <li>Account</li>
                <li>Returns</li>
                <li>Shipping</li>
            </ul>
        </div>
        <div className='page'>
            <h3>Pages</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Terms</li>
                <li>Contact</li>
                <li>Conditions</li>
            </ul>
        </div>
        
    </div>

    </>
  )
}

export default Footer