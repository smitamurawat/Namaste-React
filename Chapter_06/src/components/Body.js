import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

/*    const searchText1 = "UDUPI"; //This is the way to define local variable in javascript 
        const [searchText] = useState('UDUPI') ; //This is the way to define local variable in react
        setSearchText is a function given by useState to update variables
        
*/

const filterData = (searchText, restaurentList) => {
  console.log(searchText);
  console.log(restaurentList);
  
  const info = restaurentList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
  return info;
};



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredRestaurentList, setFilterRestaurentList] = useState([]);


  async function getRestaurent()
  {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.95487920311943&lng=77.7179973124326&page_type=DESKTOP_WEB_LISTING");
    const results = await response.json();
    setRestaurentList(results?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurentList(results?.data?.cards[2]?.data?.data?.cards);
  }


  useEffect(()=>{
   getRestaurent()
  },[]);

  

  console.log("render1");

  return (restaurentList.length == 0)? <Shimmer/>: (
   
    <>
      <div className="search-container">
        <input
          type="text"
          className="input-search"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          disabled={searchText.length <= 3}
          onClick={() => {
            const data = filterData(searchText, restaurentList);
            setFilterRestaurentList(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurent-list">
        {(filteredRestaurentList.length == 0) ? <h1>No match Found for {"'"}{searchText}{"'"}</h1>
        :
        filteredRestaurentList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.uuid} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
