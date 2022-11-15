import React, { useState } from "react";
import Head from "./Head";
import "./header.module.css";
import DropDownProfile from "./DropDownProfile";
import { Link } from "react-router-dom";



const Header = () => {
  const [navbar, setNavbar] = useState(false);

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
