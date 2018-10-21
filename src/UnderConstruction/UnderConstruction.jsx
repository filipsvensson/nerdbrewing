import React from "react";
import underConstruction from "./under_construction.gif";

import "./UnderConstruction.css";

const UnderConstruction = () => (
  <div className="under-construction">
    <img src={underConstruction} alt="Under construction" />
    <p>Under construction</p>
  </div>
);

export default UnderConstruction;
