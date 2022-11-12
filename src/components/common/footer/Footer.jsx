import React from "react"
import "./footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      {/* <footer> */}
        {/* <div className='container'> */}
          {/* <div className='box logo'> */}
            {/* <img src='../images/tech-logo-footer.png' alt='' /> */}
            {/* <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p> */}
            {/* <i className='fa fa-envelope'></i> */}
            {/* <span> hello@lecrimson.ca </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +1-(514)-779-1234</span> */}
          {/* </div> */}
          {/* <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            {/* <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul> */} 
          {/* </div> */}
        {/* </div> */}
      {/* </footer> */}
      <div className='legal  '>
        <div className='container flexSB'>
          <p>©All Rights Reserved</p>
          <ul>
            
                <Link to='/home'>Home </Link>
              
                <Link to='/AboutUs'>About Us </Link>

                <Link to='/AboutUs'>Contact Us</Link>
              </ul>
          <p>
            Developed by CrimsonFive
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
