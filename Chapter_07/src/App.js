import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Offer from "./components/Offers";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="container">
     
      <Header/>
      <Outlet />
      <Footer />
    
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path :"/",
    element : <AppLayout/>,
    errorElement :<Error />,
    children: [
     {
        path: "/",
        element: <Body />,
      },
          
      {
        path :"/offers",
        element : <Offer/>
    
      },
      {
         path :"/contact-us",
         element: <Help/> 
      },
      {
        path : "/restaurent/:resId",
        element : <RestaurantMenu />
      }

    ]
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);

