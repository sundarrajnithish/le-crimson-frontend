import "./Suggession.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Suggession = () => {
  const [items, setItems] = useState([]);
  const [buttonText, setButtonText] = useState("Follow");

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/profile/search/location?location=US"
      );
      console.log(response.data, "Data at followTable");
      setItems(response.data);
    };
    getItems();
  }, []);

  const clickHandler = (event) => {
    {
      parseInt(event.target.id) === items.id
        ? setButtonText("unFollow")
        : setButtonText("Follow");
    }
  };

  {
    /*const clickHandler = (event) => {
    const newSuggessionList = items.firstName.filter(
      (Suggession) => Suggession.id !== parseInt(event.target.id)
    );

    setItems((prev) => ({
      ...prev,
      followers: newSuggessionList,
    }));
  };*/
  }

  return (
    <div>
      <table sx={{ minWidth: 650 }} aria-label="simple table" className="table12">
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>.</th>
        </tr>
        <hr />

        {items &&
          items.map((record) => {
            return (
              <tr>
                <td className="td">{record.firstName}</td>
                <td className="td">{record.location}</td>
                
                <td className="td">
                  <button
                    id={record.id}
                    onClick={clickHandler}
                    className="pro-button"
                  >
                    follow
                  </button>

                  {/* <button
                    id={record.id}
                    onClick={clickHandler}
                    className="pro-button"
                  >
                    add friend
                  </button> */}
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
export default Suggession;
