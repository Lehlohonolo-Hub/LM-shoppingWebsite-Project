

import React, {useState} from 'react'
import {FaTruck, FaSearch} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import { FaRegUser } from "react-icons/fa";
import {BsBagCheck} from 'react-icons/bs';
import {CiLogin, CiLogout} from 'react-icons/ci';
//import {AiOutlineUser} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
 

const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
        
          <div className="icon">
          <FaTruck />
          </div>
          <p>FREE Shipping when  shopping up to R800</p>
    </div>
    <div className='main_header'>
      <div className='container'>
        <div className='logo'> 
          <img src='img/LMlogo.png' width="100%" alt='logo'></img>
        </div> 
        <div className='search_box'>
          <input type='text' placeholder='Search your product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}>
            
          </input>
          <button onClick={() => searchbtn (search)}><FaSearch /></button>
          
        </div>
        <div className='icon'> 
          {
            isAuthenticated &&
            (
              <div className='account'>
              <div className='user_icon'>
              <FaRegUser />
              </div>
              <p>Hello, {user.name}</p>
            </div>
            )
          }
          
          <div className='second_icon'>
          <Link to="/" className='link'><AiOutlineHeart /></Link> 
          <Link to="/cart" className='link'><BsBagCheck/></Link>
          
          </div>
          
        </div>
      </div>
    </div>
    <div className='header'>
      <div className='container'>
        <div className='nav'>
        <ul>
          <li>
            <Link to='/' className='link'>Home</Link>
          </li>

          <li>
            <Link to='/product' className='link'>Product</Link>
          </li>

          <li>
            <Link to='/about' className='link'>About</Link>
          </li>

          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
        </ul>
        </div>
          
        <div className='auth'>
          {
            isAuthenticated ?
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
            :
            <button onClick={() => loginWithRedirect()}><CiLogin/></button>
          }
          
        </div>
      </div>
    </div>
    </>
  )
}

/* check where bug starts (auth0) */


/*
all products 02:00:00 changing tab on app.js
*/

export default Nav

