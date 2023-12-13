import React, { FC, useState } from "react";

const Komputery: FC = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const pushData = () => {
        let view = document.getElementById("view");

        

        // Dodanie nowego tekstu do pola listy
        let newTd = document.createElement("li");
        var node = document.createTextNode(inputValue);
        newTd.appendChild(node);
        view!.appendChild(newTd);

        // Wyczyszczenie pola tekstowego po dodaniu
        setInputValue("");
    };

    return (
        <div>
            <input
                type='text'
                name="text"
                id="inputText"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={pushData}>add to list</button>

            <ul id="view"></ul>
        </div>
    );
};

export default Komputery;
