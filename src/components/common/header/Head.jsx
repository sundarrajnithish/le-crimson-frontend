import React from "react"
import "./header.module.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img src={require('./logo.png')} width="400px" alt='' />
          </div>
          <div className='ad'>
            {/* <img src='../images/headerb.png' alt='' /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
