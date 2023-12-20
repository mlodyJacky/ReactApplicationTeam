// Filename - pages/about.js

import React from "react";
import myszka from "../images/myszkamiki.png"
import cake from "../images/cake.jpg"

const Krzywa = () => {
  return (
    <div>
      <h1>Jako użytkownik na podstronie Krzywa chcę widzieć określone zdjęcie</h1>
      <img
        src={myszka} // Dodaj ścieżkę do pliku myszkamiki.png
        alt="Zdjęcie myszkamiki"
        style={{ maxWidth: "100%" }} // Dostosuj styl, jeśli to konieczne
      />
      <h1>
        https://pawkrz.atlassian.net/browse/SCRUM-22?atlOrigin=eyJpIjoiODJjYmM3OWZhNDIxNGE4NmFlYWNiMDIxZWViMmUxM2UiLCJwIjoiaiJ9
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
