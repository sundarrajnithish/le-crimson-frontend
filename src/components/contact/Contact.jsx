import React from 'react'
import {MdOutlineMailOutline} from 'react-icons/md'
import './contactmodule.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import Heading from "../common/heading/Heading"


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cxf2g9f', 'template_40rusc5', form.current, 'KXBWP1G6_NePQW41h')
    e.target.reset()
  };
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
            <h4>Email</h4>
            <h5></h5>
            <a href='mailto:'>Send a message</a>
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