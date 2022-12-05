import React from "react"
import "./card.css"


const Card = ({ item: { id, cover, catgeory, headlines, author, articleUrl, description, source } }) => {
  // console.log(urlToImage,"Cover");
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='titleBg'>
          {/* <span className='category'>{catgeory}</span> */}
          <br />
          <br />
          <br />
          <br />
          <h1 className="hero text h1"><a href = {articleUrl}> {headlines}</a></h1>
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
