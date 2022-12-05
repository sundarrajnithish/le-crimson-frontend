import "./profile.css";

//import AdminCharts1 from "../AdminCharts/adminChartspie";
//import AdminTable from "../table/admin-table";
const SingleUser = () => {

  const items = JSON.parse(localStorage.getItem('login-data'));
    console.log(items["profileObj"]["name"])
    console.log(items["profileObj"]["imageUrl"])

  const respose_after_login = {
    name: items["profileObj"]["name"],
    email: items["profileObj"]["email"],
    location: "Montreal",


  };
  return (
    <div className="singleuser">
      <div className="singleusercontainer">
        <div className="singleuser-top">
          <div className="singleuser-left">
            {/* <div className="singleuser-edit">Edit</div> */}
            <h1 className="singleuser-title">Your Profile</h1>
            <div className="singleuser-item">
              <img className='singleuser-item-img' src={items["profileObj"]["imageUrl"]} />
              <div className="singleuser-details">
                <h1 className="singleuser-name">{respose_after_login.name}</h1>
                <div className="singleuser-items">
                  <span className="detailsKey">Email: </span>
                  <span className="detailsValue">{respose_after_login.email}</span>
                </div>
                <div className="singleuser-items">
                  <span className="detailsKey">Location: </span>
                  <span className="detailsValue">IND </span>
                </div>
                <div className="singleuser-items">
                  <span className="detailsKey">Preferences: </span>
                  <span className="detailsValue">{(localStorage.getItem('preferences'))}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="singleuser-right">{/*<AdminCharts1 />*/}</div>
        </div>
        <br />
        <div className="singleuser-bottom">
          <h1 className="singleuser-title"> Your Timeline</h1>
          {/* <AdminTable /> */}
        </div> 
      </div>
    // </div>
  );
};

export default SingleUser;
