import React from "react";
import ReactDOM from "react-dom/client";
const h1 = React.createElement("h1", {}, "Namaste Everyone!!!");
      const dom = ReactDOM.createRoot(document.getElementById("root"));
      dom.render(h1);
      console.log(h1);