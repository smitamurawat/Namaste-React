import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Error = () => {
  const data = useRouteError();
  console.log(data);
  return(
  <div>
  <Header/>
  <div className="error-container">
  <h1>{data.statusText}</h1>
  <div>Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</div>
  
  </div>
  <Footer/>
  </div>

  ) 
};

export default Error;
