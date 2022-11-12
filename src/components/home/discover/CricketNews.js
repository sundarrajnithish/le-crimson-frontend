import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import NewsItem from './NewsItem'

import data from "./search-api-response"

console.log(data, "here is the data")


const NewsList = () => {
    const [Articles_obj, setArticles_obj] = useState([])

    // useEffect(async () => {
    //     const response = await axios.get('https://newsapi.org/v2/everything?q=Canada&apiKey=0de6fae3bb8e4eecaf844a1ab735a457')
    //     console.log(response.data,"jhkgjhgjhgjhg");
    //     // console.log
    //     setArticles(response.data.articles);
    //     // console.log(Articles[1],"aidfghaskughfkui");

    // }, [])


    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch(
              "./search-api-response"
            )
          ).json();
         console.log(data)
          // set state when the data received
          setArticles_obj(data.articles);
          console.log(Articles_obj);
        };
    
        dataFetch();
      }, []);


    // useEffect(() => {
    //     const getArticles = async () => {
    //         const response = await axios.get('./search-api-response')
    //         console.log(response, "respone cricket")
    //         setArticles(response.data.articles)
    //     }
    //         getArticles()
    // }, [])
    return (
        <></> )
}

export default NewsList