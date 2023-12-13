import React, { FC, useState } from "react";

const Komputery: FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [listItems, setListItems] = useState<string[]>([]);

    const pushData = () => {
        // Dodanie nowego tekstu do listy
        setListItems([inputValue]);

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

            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Komputery;
