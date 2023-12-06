// Filename - pages/about.js

import React from "react";

const Krzywa = () => {
  return (
    <div>
      <h1>Jako użytkownik na podstronie Krzywa chcę widzieć określone zdjęcie</h1>
      <img
        src="/myszkamiki.png" // Dodaj ścieżkę do pliku myszkamiki.png
        alt="Zdjęcie myszkamiki"
        style={{ maxWidth: "100%" }} // Dostosuj styl, jeśli to konieczne
      />
      <h1>
        https://pawkrz.atlassian.net/browse/SCRUM-22?atlOrigin=eyJpIjoiODJjYmM3OWZhNDIxNGE4NmFlYWNiMDIxZWViMmUxM2UiLCJwIjoiaiJ9
      </h1>
    </div>
  );
};

export default Krzywa;
