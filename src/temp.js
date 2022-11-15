

import axios from 'axios'

import React, {useState, useEffect} from 'react'

// const Temp = () => {

//     const [items, setItems] = useState([])
  
//   useEffect(() => {
//     const getItems = async () => {
//         const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/home')
//         console.log(response, "At TEMP DATA")
//         setItems(response)
//     }
//         getItems()
// }, []);

//   return (
//     <></>
//   )
// }

// export default Temp

const NewsList = () => {
  const [Articles_obj, setArticles_obj] = useState([])




  useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (await fetch("https://lecrimson-backend.herokuapp.com/news/home")).xml();
       console.log(data.articles, "LOL DATA")
        // set state when the data received
        setArticles_obj(data);
        console.log(Articles_obj, "hello here articles kiran");
      };
  
      dataFetch();
    }, []);
    return (
      <></> )
}

export default NewsList

