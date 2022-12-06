import {MdOutlineMailOutline} from 'react-icons/md'
import './contactmodule.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import React, { useState } from "react"
import Heading from '../../common/heading/Heading';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cxf2g9f', 'template_40rusc5', form.current, 'KXBWP1G6_NePQW41h')
    e.target.reset()
  };
  const [searchQuery, setSearchQuery] = useState('');
    // const history = useNavigate();

  const onSubmit = e => {
        // history.push(`?s=${searchQuery}`);
        console.log("submit ran")
        // e.preventDefault();

        console.log(searchQuery, "Printing Search Query")
        localStorage.setItem('email-key', JSON.stringify(searchQuery));
        console.log(localStorage.getItem("email-key")," *Email Key in Local Storage");
        
    };
    let email_id =  "mailto:" + JSON.parse(localStorage.getItem("email-key"))
    console.log(email_id, "the email id")
  return (
    
    <section id='contact'>
      
      <Heading title='Contact Us' />
      <br />
      <br />
      <br />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Invite a Friend!</h4>
            <h5></h5>
            <form onSubmit={onSubmit}>
            <input className='input-box'
                value={searchQuery}
                // onInput={(e) => setSearchQuery(e.target.value)}
                onChange={e => setSearchQuery(e.target.value)}
                type="text"
                id="search-data"
                placeholder="Enter Email"
                name="search-data"
            /> 
            
            <a href= {email_id} type='submit'>Send a message</a>
            </form>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact