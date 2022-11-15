import React, { useState } from "react";
import Head from "./Head";
import "./header.module.css";
import DropDownProfile from "./DropDownProfile";
import { Link } from "react-router-dom";



// const Stinger = () => {
//   const itemsforvar = JSON.parse(localStorage.getItem('lol'));

//   // const vari = toString(itemsforvar[1])
//   // console.log(itemsforvar[1], "    hello Im String")
//   const vari = "/" + itemsforvar[1]

//   return (
//    <>
    
//    </>
//   )
// }

// Stinger();



const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const items = JSON.parse(localStorage.getItem('lol'));

  var vari1 = "/" + items[0]
  var vari2 = "/" + items[1]
  var vari3 = "/" + items[2]
  var vari4 = "/" + items[3]
  var vari5 = "/" + items[4]
  var vari6 = "/" + items[5]
  var vari7 = "/" + items[6]
  var vari8 = "/" + items[7]
  var vari9 = "/" + items[8]

  console.log(items, "data retrieved!!")

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              {/* <li>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
              <button className='barIcon' onClick={() => setNavbar(!navbar)} />
              </li> */}

              <li></li>
              <li>
                <Link to="/home">Home</Link>
              </li>
      
              {/* <li>
                <Link to="/social">Social</Link>
              </li> */}
               <li>
                <Link to="/preferences">Preferences</Link>
              </li>
              <li>
                <Link to={vari1}>{items[0]}</Link>
              </li>
              <li>
                <Link to={vari2}>{items[1]}</Link>
              </li>
              <li>
                <Link to={vari3}>{items[2]}</Link>
              </li>
              <li>
                <Link to={vari4}>{items[3]}</Link>
              </li>
              <li>
                <Link to={vari5}>{items[4]}</Link>
              </li>
              <li>
                <Link to={vari6}>{items[5]}</Link>
              </li>
              <li>
                <Link to={vari7}>{items[6]}</Link>
              </li>
              <li>
                <Link to={vari8}>{items[7]}</Link>
              </li>
              <li>
                <Link to={vari9}>{items[8]}</Link>
              </li>
              {/* <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li> */}
              <ul>
                
              </ul>
              <ul>

              </ul>
              <ul>
                <DropDownProfile />
              </ul>
              <ul>

              </ul>
              
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
