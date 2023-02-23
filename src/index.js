import React from "react";
import ReactDOM from "react-dom/client";
import Bodytext from "../src/components/bodytext/bodytext";
import Homepage from "../src/components/Navbar/homepage";
import Uploadbox from "../src/components/Uploadbox/Uploadbox";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  
    <Homepage />
    <Bodytext />
    <Uploadbox/>
  </>
);
