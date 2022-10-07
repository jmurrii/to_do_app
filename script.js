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
let checkbox;
function addItem() {
    newLi = document.createElement('li');
    inputValue = document.getElementById('inputField').value;
    listItems.push(inputValue);
    console.log("listItems Array", listItems);
    newLi.innerText = inputValue;
    newLi.setAttribute("class", "list-style");
    newLi.id = listIdGenerator();

    checkbox = document.createElement('input');
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
function chkBoxClicked() {

    if (checkbox.checked) {

        listItem = document.getElementById(listIdNum);
        listItem.style.textDecoration = "line-through";

        newDeleteIcon = document.createElement('i');
        newDeleteIcon.setAttribute("class", "fa-regular fa-trash-can delete-icon");
        newLi.appendChild(newDeleteIcon);


    } else {
        console.log("slick boolean work");
        listItem = document.getElementById(listIdNum);
        listItem.style.textDecoration = "none";

        newDeleteIcon.remove();
    }

    // newDeleteIcon.setAttribute("onclick");
    // newDeleteIcon.setAttribute("onclick", "removeItem()");

    // checkbox.addEventListener('click', () => {
    //     console.log("from event listener");
    //     listItem.style.textDecoration = "line-through";
    //     newDeleteIcon.remove();
    // })
}

function uncheckCheckBox() {

    if (newDeleteIcon) {

    }
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