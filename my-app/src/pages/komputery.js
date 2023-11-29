// Filename - pages/signup.js

import React from "react";

const Komputery = () => {
	return (
$(document).ready(function() {
    // Array to store items
    var items = [];

    // Function to add item to the array and update the list
    function addItem() {
        var item = $('#itemInput').val();
        if (item !== '') {
            items.push(item);
            updateList();
            $('#itemInput').val('');
        }
    }

    // Function to update the list of items
    function updateList() {
        $('#itemList').empty();
        for (var i = 0; i < items.length; i++) {
            var listItem = $('<li>').addClass('list-group-item').text(items[i]);
            $('#itemList').append(listItem);
        }
    }

    // Event listener for Add button click
    $('#addItemBtn').click(function() {
        addItem();
    });

    // Event listener for Enter key press in the textbox
    $('#itemInput').keypress(function(e) {
        if (e.which === 13) {
            addItem();
        }
    });
});

	);
};

export default Komputery;
