const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
let inputValue;
const addItemBtn = document.getElementById('add-item-btn');


penIcon.addEventListener('click', function () {
    inputField.focus();
});




// let chores = [];
// chores.push(inputValue);
//     console.log("hey hey ", chores);


const toDoList = document.getElementById('to-do-list');


function addItem() {
    const newLi = document.createElement('li');

    inputValue = document.getElementById('inputField').value;
    newLi.innerText = inputValue;
    newLi.setAttribute("class", "list-style")

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";



    // (B2) APPEND TO LIST

    toDoList.appendChild(newLi);
    toDoList.insertBefore(checkbox, newLi);
    // newLi.appendChild(checkbox);

    clearInput();

};

// function createCheckBox() {
//     let checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
//     newLi.appendChild(checkbox);
// }


function clearInput() {
    document.getElementById('inputField').value = '';
};

// function createCheckBox(){
//     let checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
// //     checkbox.name = "name";
// //     checkbox.value = "value";
// //     checkbox.id = "id";
// }