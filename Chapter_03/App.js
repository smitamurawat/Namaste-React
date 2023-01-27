import React from "react";
import ReactDOM from "react-dom/client";
const h1 = React.createElement("h1", { id: "title" }, "Namaste Everyone!!!");
const h2 = React.createElement("h2", { id: "heading" }, "Hello word");
const container = React.createElement("div", {}, [h1, h2]);

const HeaderComponent = () => {
  return (
    <>
      <header className="main-header">
        <div className="global-nav">
          <div className="header-Logo">
            <a href="#" className="logo-container">Logo</a>
            <div className="house-address">
                  <span className="location-text">Vibgyor High School Rd, Whitefield, Bengaluru, Karnataka 560066, India</span>
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
              <li className="nav-item">
                <div>
                  <span>signIn</span>
                </div>
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

const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<HeaderComponent></HeaderComponent>);
console.log(container);
