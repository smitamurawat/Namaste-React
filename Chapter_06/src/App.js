import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
    <div className="container">
     
      <Header/>
     
      <Body />
      <Footer />
    
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

