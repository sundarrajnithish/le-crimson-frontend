import React from "react"
import "./card.css"


const Card = ({ item: { id, urlToImage, catgeory, title, author, url, description, source } }) => {
  // console.log(urlToImage,"Cover");
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={urlToImage} alt='' />
        </div>
        <div className='titleBg'>
          {/* <span className='category'>{catgeory}</span> */}
          <br />
          <br />
          <br />
          <br />
          <h1 className="hero text h1"><a href = {url}> {title}</a></h1>
          {/* <Link to={url}> */}
            {/* <>{description}</> */}
          {/* </Link> */}
          {/* <div className='author flex'>
            <span>by {source.name}</span> */}
            {/* <span>{time}</span> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Card
