import RestaurantCard from "./RestaurantCard";
import { restroList } from "../constant";
import { useState } from "react";

/*    const searchText1 = "UDUPI"; //This is the way to define local variable in javascript 
        const [searchText] = useState('UDUPI') ; //This is the way to define local variable in react
        setSearchText is a function given by useState to update variables
        
*/

const filterData = (searchText, restroLists) => {
  const info = restroLists.filter((res) => res.data.name.includes(searchText));
  return info;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurentList, setRestaurentList] = useState(restroList);

  return (
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
            const data = filterData(searchText, restroList);
            setRestaurentList(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurent-list">
        {restaurentList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.uuid} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
