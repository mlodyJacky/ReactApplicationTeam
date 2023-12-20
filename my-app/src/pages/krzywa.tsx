// Filename - pages/about.js

import React from "react";
import myszka from "../images/myszkamiki.png";
import '../style/mysza.css';

const Krzywa = () => {
  return (
    <div className="center">
      <br></br>
      <img className="mysza" src={myszka} alt="Zdjęcie myszkamiki"/>
      <h1>
        Mysza!!!
      </h1>
    </div>
  );
};

export default Krzywa;
