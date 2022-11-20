import React from "react"
import "./header.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div>
            <img src={require('./logo.png')} />
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
