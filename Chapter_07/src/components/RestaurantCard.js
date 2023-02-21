import{ Img_url} from "../constant";


const RestaurantCard =({name,cuisines,cloudinaryImageId,slaString,costForTwoString})=>{
    return(
      <div className="card" >
      <img src={Img_url+cloudinaryImageId}/>
       <h2>{name}</h2>
       <span>{cuisines.join(', ')}</span>
       <div className="card-footer">
         <p className="cardText">{4.5}</p>
         <p className="cardText">{slaString}</p>
         <p className="cardText">{costForTwoString}</p>
       </div>
      </div>
    )
  }

  export default RestaurantCard;