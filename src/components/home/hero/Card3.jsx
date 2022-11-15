import React from "react"
import { Link } from "react-router-dom"
import photo from "./123.jpg"



const Card = ({ item: { id, urlToImage, catgeory, headlines, author, articleUrl, description, source } }) => {
  // console.log(urlToImage,"Cover");
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={photo} alt='' />
        </div>
        <div className='titleBg'>
          {/* <span className='category'>{catgeory}</span> */}
          <h1 className='titleBg' ><a href = {articleUrl}> {headlines}</a></h1>
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
