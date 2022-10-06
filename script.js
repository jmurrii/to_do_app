const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
let inputValue;
const addItemBtn = document.getElementById('add-item-btn');
let listIdNum;

penIcon.addEventListener('click', function () {
    inputField.focus();
});




let listItems = [];



const toDoList = document.getElementById('to-do-list');

let newLi;
function addItem() {
    newLi = document.createElement('li');
    inputValue = document.getElementById('inputField').value;
    listItems.push(inputValue);
    console.log("listItems Array", listItems);
    newLi.innerText = inputValue;
    newLi.setAttribute("class", "list-style heyho");
    // newLi.id = "new-li-item";
    newLi.id = listIdGenerator();


    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = chkBoxIdGenerator();
    checkbox.setAttribute("class", "checkbox")
    checkbox.setAttribute("onclick", "chkBoxClicked()");

    // (B2) APPEND TO LIST

    toDoList.appendChild(newLi);
    toDoList.insertBefore(checkbox, newLi);


    clearInput();

};


function listIdGenerator() {

    for (let i = 0; i < listItems.length; i++) {
        listIdNum = i + 1;
    }
    console.log("new listId:", listIdNum);
    return listIdNum;
}

function chkBoxIdGenerator() {
    let chkBoxIdNum;
    let randomNum = Math.floor(Math.random() * 100) + 1;
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    chkBoxIdNum = randomLetter + randomNum;
    return chkBoxIdNum;
}

let newDeleteIcon;
function chkBoxClicked() {
    console.log("testing, testing, testing");

    console.log("inputValue: ", inputValue);
    let listItem = document.getElementById(listIdNum);

    listItem.style.textDecoration = "line-through";

    newDeleteIcon = document.createElement('i');
    newDeleteIcon.setAttribute("class", "fa-regular fa-trash-can delete-icon");
    newLi.appendChild(newDeleteIcon);
    newDeleteIcon.setAttribute("onclick", "removeItem()");
}


function removeItem() {
    console.log("I exist....from removeItem function");
}


function clearInput() {
    document.getElementById('inputField').value = '';
};

// let checkbox = document.createElement('input');

// function createCheckBox() {
//     checkbox.type = "checkbox";
//     checkbox.id = "chkBox1";
//     // checkbox.id = "keep track of different id boxes";
//     checkbox.setAttribute("class", "checkbox")
//     checkbox.setAttribute("onclick", "chkBoxClicked()");
// }



// function createCheckBox() {
//     let checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
//     newLi.appendChild(checkbox);
// }

// function injectNewElements() {
//     toDoList.appendChild(newLi);
//     toDoList.insertBefore(checkbox, newLi);
// }