import React, {useState, useEffect} from "react"
import axios from 'axios'

const Zero = () => {
  const [items, setItems] = useState([])
  let shuffleItem = []
  let search_term = "Cricket"
  useEffect(() => {
    const getItems = async () => {
        const temp_data = {firstName: "Sindhiya", email:"china@loki.com"}
        const headers = {
          "Content-Type": "application/json"
        };
        const response = await axios.put("https://lecrimson-backend.herokuapp.com/profile", {
          "id": 14,
          "firstName": "k1",
          "lastName": "k237",
          "email": "kk236363636eferfdgdfragapriayyaa@gmail.com",
          "profilePic": "",
          "loginSource": "FB",
          "location": null,
          "favCategory": "[]",
          "friends": null,
          "followers": null,
          "blocked": null
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(response, "Response at db_test")
        setItems(response)
        // console.log(items, "Before Shuffling")
        // items = arrayShuffle(items)
        // console.log(shuffleItem, "Shuffled")
    }
        getItems()
}, [])

// {
//   firstName: 'Fred',
//   lastName: 'Flintstone',
//   email: 'lol@lol.com',
//   loginSource: 'chihihi',
//   profilePic: 'donkey'
// }


  return (
    <>
      <div>
        {console.log(items, "Array at Chicago")}
      </div>
    </>
  )
}

export default Zero