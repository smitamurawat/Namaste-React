import { useState, useEffect } from "react";
import { Img_url } from "../constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const params = useParams();
  console.log(
    "https://www.swiggy.com/dapi/menu/v4/full?lat=12.95487920311943&lng=77.7179973124326&menuId=" +
      params.resId
  );
  const [menuItem, setMenuItem] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const ApiUrl = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.95487920311943&lng=77.7179973124326&menuId=" +
        params.resId
    );
    const results = await ApiUrl.json();
    console.log("Hi",results);
    setMenuItem(results?.data);
  }

  
  
  return  (
   
    <div className="restaurant-menu">
      {console.log("render menu")}
      <div className="restaurant-menu-header">
        <div className="restaurant-image-section">
          <img src={Img_url + menuItem?.cloudinaryImageId} />
        </div>
        <div className="resto-details">
          <div>
            <h1>{menuItem?.name}</h1>
          </div>
          <div>{menuItem?.cuisines}</div>
          <div>{menuItem?.locality + ", " + menuItem?.area}</div>
          <div className="resto-sub-details">
            <div className="restro-avg-details">
            <span>{menuItem?.avgRatingString}</span>
            </div>
            <div className="restro-avg-details">
            <span>{menuItem?.sla?.deliveryTime}</span>
            </div>
            <div className="restro-avg-details">
            <span>{menuItem?.costForTwoMsg}</span>
            </div>
           
           
          </div>
        </div>
        <div className="offers-section">
          <div className="offers-text">offers</div>
          
        </div>
      </div>
      <div className="menu-section">
       
        {menuItem && Object.values(menuItem?.menu?.items).map((item) => (
           <div className="menu-items" key={item.id}>
            <div >
             <h3>{item.name}</h3>

           </div> 
           <div>{item?.price}</div>
           <div>{item?.description}</div>
           </div>
          ))}
        
      </div>
    </div>
  );
};

export default RestaurantMenu;
