import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/mood-food.jpg";
export const Title = () => {
    return (
      <a href="#">
        <img
          alt="logo"
          className="logo"
          src={Logo}
        />
      </a>
    );
  };

  const Header = () => {
   const[ isLoggedIn, setLoggedIn] = useState(false);

    return (
      <>
        <header className="main-header">
          <div className="global-nav">
            <div className="header-Logo">
              {<Title />}
              <div className="house-address">
                <span className="location-text">
                  Vibgyor High School Rd, Whitefield, Bengaluru, Karnataka 560066,
                  India
                </span>
              </div>
  
              <ul className="main-nav-items">
                <li className="nav-item">
                  <div>
                    <span>Search</span>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <Link to ="/offers">offers</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <Link to = "/contact-us">Contact</Link>
                  </div>
                </li>
                <li className="nav-item" >
                  {(!isLoggedIn)?(
                    <div onClick={()=> setLoggedIn(true)}>
                    <span>LogIn</span>
                  </div>
                  ):
                  ( 
                  <div onClick={()=> setLoggedIn(false)}>
                  <span>LogOut</span>
                </div>)}
                  
                  
                 
                </li>
                <li className="nav-item">
                  <a>cart</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    );
  };
  

  export default Header;