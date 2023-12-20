// Filename - pages/about.js

import React from "react";
import myszka from "../images/myszkamiki.png";
import '../style/mysza.css';
import cake from "../images/cake.jpg"

const Krzywa = () => {
  return (
    <div className="center">
      <br></br>
      <img className="mysza" src={myszka} alt="Zdjęcie myszkamiki"/>
      <h1>
        Mysza!!!
      </h1>

      <img
        src={cake} // Dodaj ścieżkę do pliku myszkamiki.png
        alt="Zdjęcie cake" 
        style={{ maxWidth: "100%" }} // Dostosuj styl, jeśli to konieczne
      />
      <h1>
        Przepyszne ciasto z kremem. Mmm!!!
      </h1>


    </div>
  );
};

export default Krzywa;
