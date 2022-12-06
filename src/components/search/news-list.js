import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);

  console.log();

  useEffect(() => {
    const getUser = async () => {
      let search_key = JSON.parse(localStorage.getItem("search-key"));
      const URL =
        "https://lecrimson-backend.herokuapp.com/news/search?q=" +
        String(search_key) +
        "&location=CA";
      console.log(URL, "URL here");
      console.log(search_key, "search key here");
      try {
        const response = await axios.get(URL);
        console.log("this is response", response);
        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <table className="table11">
        <thead>
          <tr className="tr11">
            {/* <th scope="col">No.</th>
      <th scope="col">News Title</th> */}
            {/* <th scope="col">News Description</th> */}
            {/* <th scope="col">News Image </th> */}
          </tr>
        </thead>

        {news.map((value, index) => {
          return (
            <tbody key={index}>
              <tr className="tr11">
                <th scope="row">{index + 1}</th>
                <th />
                <th />
                <th />
                <th />
                <th />
                <th />
                {/* <td><img src={value.cover}></img></td> */}
                <td className="tr11">
                  <a href={value.articleUrl}>{value.headlines}</a>
                </td>
                <td className="tr11">
                  <a href={value.sourceUrl}>{value.sourceName}</a>
                </td>
                <td className="tr11">{value.publishDate}</td>

                {/* <td>{value.description}.... :- <a href={value.sourceUrl} rel="noreferrer" target="_blank">more about news</a></td> */}
                {/* <td className='rowClass' style={{objectFit:"contain",backgroundColor:"blue"}}><img className='newsclass' src={value.urlToImage} alt="" /></td> */}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Home;