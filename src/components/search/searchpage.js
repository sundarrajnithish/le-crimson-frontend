import React from 'react'
import Header from "../common/header/Header"
import Search from "./search"

import News from "./news"

const searchpage = () => {
    
  return (
    <>
    <div className='container -h'>
    <Header />
    </div>
    <Search />
    {/* <News /> */}
    </>
  )
}

export default searchpage