import React from "react"
import { Link } from "react-router-dom"



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
          <h1 className='titleBg'><a href = {url}> {title}</a></h1>
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
