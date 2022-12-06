import { useNavigate } from "react-router-dom";

import "./footer.css"

function Footer() {
  let navigate1 = useNavigate();
  let navigate2 = useNavigate();
  let navigate3 = useNavigate();
  const routeChange1 = () => {
    let path1 = `/aboutUs`;
    navigate1(path1);
  }
  const routeChange2 = () => {
    let path2 = `/contactus`;
    navigate2(path2);
    
  };
  // const routeChange3 = () => {
  //   let path3 = `/contactus`;
  //   navigate3(path2);
    
  // };
  
  return (
    <div class="footerpreferences">
      <ul>
        <a onClick={routeChange1}>About Us</a>
        {"   "} <a onClick={routeChange2}>Contact Us</a>
        {"   "}
        {/* <a onClick={routeChange1}>Terms</a>
        {"   "} */}
      </ul>
    </div>
  );
  }


export default Footer;
