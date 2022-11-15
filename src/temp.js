

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

// const NewsList = () => {
//   const [Articles_obj, setArticles_obj] = useState([])



  // 'https://newsapi.org/v2/everything?q=Cricket&apiKey=0de6fae3bb8e4eecaf844a1ab735a457'
  // "https://lecrimson-backend.herokuapp.com/news/home"

  // useEffect(() => {
//       // fetch data
//       const dataFetch = async () => {
//       const data = await axios.get('https://lecrimson-backend.herokuapp.com/news/home').json();
//        console.log(data, "LOL DATA")
//         // set state when the data received
//         setArticles_obj(data);
//         console.log(Articles_obj, "hello here articles kiran");
//       };
  
//       dataFetch();
//     }, []);
//     return (
//       <></> )
// }

// export default NewsList


const Hero = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const getItems = async () => {
        const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/home')
        console.log(response.data, "At Hero")
        setItems(response.data.articles)
    }
        getItems()
}, [])


  return (
    <>
      
    </>
  )
}

export default Hero


