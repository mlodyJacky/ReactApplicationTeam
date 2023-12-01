import React from "react";

const Komputery = () => {
    function pushData(){
        let view = document.getElementById("view");
        let newTd = document.createElement("li");
        var inputText = document.getElementById("inputText").value;
        var node = document.createTextNode(inputText);
        newTd.appendChild(node);
        view.appendChild(newTd);
    };
	return (
        <div>
            <input type='text' name="text" id="inputText" />
            <button onclick="pushData()">add to list</button>

            <li>
            <ul id="view">
            </ul>
            </li>
        </div>
        
    )};

export default Komputery;
