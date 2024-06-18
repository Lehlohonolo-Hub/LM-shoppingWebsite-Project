import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [users, setUser] =useState(
        {
            Name:'', Email:'', Subject:'', Message:''
        }
    )
    let name, value
    const data = (e) =>
        {
            name = e.target.name;
            value = e.target.value;
            setUser({...users, [name]: value})
        }

    const senddata = async (e) =>
        {
            const{Name, Email, Subject, Message} = users
            e.preventDefault();
            const options = {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify({
                    Name, Email, Subject, Message
                })
            }
            const res = await fetch('https://lm--ecommerce-contact-4c058-default-rtdb.firebaseio.com/', options) /* #### Firebase Link #### */
            console.log(res)
            if(res)
                {
                    alert("Your Message sent")
                }
                else{
                    alert("An error occurred")
                }
            }
  return (
    <>
    <div className='contact_container'>
        <div className='container'>
            <h2># contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Full Name' required autoComplete='off' onChange={data}></input>

                    <input type='text' name='Email' value={users.Email} placeholder='Email' required autoComplete='off' onChange={data}></input>

                    <input type='text' name='Subject' value={users.Subject} placeholder='Subject' required autoComplete='off' onChange={data}></input>

                    <textarea name='Message' value={users.Message} placeholder='Message' required autoComplete='off' onChange={data}></textarea>

                    {
                        isAuthenticated ?
                        <button type='submit' onClick={senddata}>Send</button>
                        :
                        <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
                    }

                    
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Contact