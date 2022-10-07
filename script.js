const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
const addItemBtn = document.getElementById('add-item-btn');
const toDoList = document.getElementById('to-do-list');
let inputValue;
let listIdNum;
let listItems = [];

penIcon.addEventListener('click', function () {
    inputField.focus();
});


let newLi;
let newCheckbox;
function addItem() {
    newLi = document.createElement('li');
    inputValue = document.getElementById('inputField').value;
    listItems.push(inputValue);
    console.log("listItems Array", listItems);
    newLi.innerText = inputValue;
    newLi.setAttribute("class", "list-style");
    newLi.id = listIdGenerator();

    newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";
    newCheckbox.id = chkBoxIdGenerator();
    newCheckbox.setAttribute("class", "newCheckbox")
    newCheckbox.setAttribute("onclick", "chkBoxClicked(event)");

    // (B2) APPEND TO LIST

    toDoList.appendChild(newLi);
    toDoList.insertBefore(newCheckbox, newLi);

    clearInput();
};


function listIdGenerator() {
    for (let i = 0; i < listItems.length; i++) {
        listIdNum = i + 1;
    }
    return listIdNum;
}

let chkBoxIdNum;

function chkBoxIdGenerator() {

    let randomNum = Math.floor(Math.random() * 100) + 1;
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    chkBoxIdNum = randomLetter + randomNum;
    return chkBoxIdNum;
}

let newDeleteIcon;
let listItem;
let nextSibling;
let currentCheckBox;

function chkBoxClicked(e) {
    currentCheckBox = e.target;
    nextSibling = currentCheckBox.nextElementSibling;


    console.log("newCheckbox.checked ===", newCheckbox.checked)

    console.log("e.target=== ", e.target);
    console.log("nextSibling=== ", nextSibling);


    if (currentCheckBox.checked) {
        console.log("newCheckbox clicked");
        console.log("currentCheckBox ===", currentCheckBox)
        // nextSibling = currentCheckBox.nextElementSibling;
        nextSibling.style.textDecoration = "line-through";
        console.log("nextSibling ===", nextSibling);

        newDeleteIcon = document.createElement('i');
        newDeleteIcon.setAttribute("class", "fa-regular fa-trash-can delete-icon");
        nextSibling.appendChild(newDeleteIcon);


    } else {
        console.log("newCheckbox UNCLICKED!!!!");
        // listItem = document.getElementById(listIdNum);
        // console.log("else statement listIdNum", listIdNum);
        nextSibling.style.textDecoration = "none";

        newDeleteIcon.remove();
    }

    // newDeleteIcon.setAttribute("onclick");
    // newDeleteIcon.setAttribute("onclick", "removeItem()");

}


// function removeItem() {

//     let listItemToDelete = document.getElementById(listIdNum);
//     let chkBoxToDelete = document.getElementById(chkBoxIdNum);
//     listItemToDelete.remove();
//     chkBoxToDelete.remove();

// }


function clearInput() {
    document.getElementById('inputField').value = '';
};

// let newCheckbox = document.createElement('input');

// function createCheckBox() {
//     newCheckbox.type = "newCheckbox";
//     newCheckbox.id = "chkBox1";
//     // newCheckbox.id = "keep track of different id boxes";
//     newCheckbox.setAttribute("class", "newCheckbox")
//     newCheckbox.setAttribute("onclick", "chkBoxClicked()");
// }



// function createCheckBox() {
//     let newCheckbox = document.createElement('input');
//     newCheckbox.type = "newCheckbox";
//     newLi.appendChild(newCheckbox);
// }

// function injectNewElements() {
//     toDoList.appendChild(newLi);
//     toDoList.insertBefore(newCheckbox, newLi);
// }