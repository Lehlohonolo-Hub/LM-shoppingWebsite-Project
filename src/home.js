import React from 'react'
import { Link } from 'react-router-dom'
import { BsEye, BsHeadphones } from 'react-icons/bs'
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaPercentage } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai'
import Homeproduct from './homeproduct';

import './home.css';

const Home = ({detail, view, close, setClose, addtocart}) => {
    
  return (
    <>
    {
      close ?
      <div className='product_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
        {
          detail.map((curElm) => 
            {
            return(
              <div className='productbox'>
                <div className='img-box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2> 
                  <p>A Screen Everyone Will Love: Weather yor family is streaming or video chatting with friends tablet A8..</p>
                  <h3>R{curElm.Price}</h3>
                  <button onClick={() => addtocart(curElm)}>Add To Chart</button>
                </div>
              </div>
            )
          })
        }
        
      </div>
    </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>PLAY LIKE NEVER BEFORE </h2>
                
                <Link to='/product' className='link'>Shop Now ➜ </Link>
                
            </div>
            <div className='img_box'>
                <img src="https://media.takealot.com/covers_images/9350ca815e544c5e913e50a66230fc7f/s-zoom.file" draggable="false" width="85%"  loading="lazy" alt='nitendoSwitch' />
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src="https://media.takealot.com/covers_images/8c9c791db9524dba81a4792d2d61f78e/s-zoom.file" draggable="false" width="600" height="600" loading="lazy" alt='supGame'/>
                </div>
                <div className='detail'>
                    <p>24 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src="https://media.takealot.com/covers_images/522224fcb85c4432995772f3cea6f870/s-zoom.file" draggable="false" width="600" height="600" loading="lazy" alt='drone'/>
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src="https://media.takealot.com/covers_images/f0fa584376c34e64899ae1b4db31516c/s-zoom.file" draggable="false" width="600" height="600" loading="lazy" alt='helmet'/>

                </div>
                <div className='detail'>
                    <p>12 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                <img src="https://media.takealot.com/covers_images/e5f5fb7fc7c3445ca84cf40723609076/s-zoom.file" draggable="false" width="600" height="600" loading="lazy" alt='ps4Controller'/>
                </div>
                <div className='detail'>
                    <p>68 products</p>
                </div>
            </div>

        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                <PiAirplaneTiltFill />
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above R800</p>
                </div>
            </div>

            <div className='box'>
                <div className='icon'>
                    <MdAttachMoney />
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Guaranty</p>
                </div>
            </div>

            <div className='box'>
                <div className='icon'>
                    <FaPercentage/>
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>

            <div className='box'>
                <div className='icon'>
                    <BsHeadphones/>
                </div>
                <div className='detail'>
                    <h3>Customer Assistant</h3>
                    <p> Call Support & SMS</p>
                </div>
            </div>

        </div>
    </div>
    <div className='product'>
        <h2>Popular Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) => 
                {
                    return(
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart/></li>
                                    <li onClick={() => view(curElm)}><BsEye/></li>
                                    <li><AiOutlineHeart/></li>
                                </div>
                            </div> 
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>R{curElm.Price}</h4>
                            </div>
                        </div> 
                    )
                })  
            }
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>LATEST CONSOLE ADDED</h4>
            <h3>Xbox Series S 1TB Digital Gaming Console (Black)</h3>
            
        </div>
        <div className='img_box2'>
            <img 
            src='img/xbox.png' 
            width='200px'
            alt='xbox'/>
            
            <p>R8,979</p>
            <Link to='/product' className='link'>Shop Now ➜</Link>
        </div>
        
        </div>
        
    </div>
    </>
  )
}

export default Home