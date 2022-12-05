// import React from 'react'

// const Retrieve_Db = () => {
//     const [data, setDatas] = useState([]);
//       const getDatas = async () => {
//         let user_id = localStorage.getItem("user-id")
//           const updated_data = await axios.get("https://lecrimson-backend.herokuapp.com/profile?userId="+user_id)
        
//         .then(function (updated_data) {
//           console.log(updated_data, "Retrieved Data from DB at login process");
//           setDatas(updated_data)

//         //   localStorage.setData('login-db-preferences', send_data["data"]["favCategory"])
//         //   localStorage.setData('user-id', send_data["data"]["id"])

//         })
//         .catch(function (error) {
//           console.log(error);
//         });

        
        
//     }
//   return (
//     <div>
//               {(() => {
//                 if (db_preferences == null || db_preferences == '[]') {
//                   return (
//                     <CheckCircle />
//                   )
//                 } 
//                 else {
//                 console.log(db_preferences)
//                   return (
//                     <div>Blehhh!</div>
//                   )
//                 }
//               })()}
//             </div>
//   )
// }

// export default Retrieve_Db