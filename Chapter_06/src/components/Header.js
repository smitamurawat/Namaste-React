import { useState } from "react";
export const Title = () => {
    return (
      <a href="#">
        <img
          alt="logo"
          className="logo"
          src="https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/305846266_477183317754260_187203078204246871_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Tb3AEoFlVmAAX_ztcan&_nc_ht=scontent.fblr1-6.fna&oh=00_AfCQDScl0jglxavrfnwL2mUKfZdrEvDmrxfAENG2P-mdFA&oe=63DAD3AD"
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
                    <span>offers</span>
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