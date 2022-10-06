const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
let inputValue;
const addItemBtn = document.getElementById('add-item-btn');


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
    // checkbox.id = "chkBox1";
    checkbox.id = chkBoxIdGenerator();
    // checkbox.id = "keep track of different id boxes";
    checkbox.setAttribute("class", "checkbox")
    checkbox.setAttribute("onclick", "chkBoxClicked()");

    // (B2) APPEND TO LIST

    toDoList.appendChild(newLi);
    toDoList.insertBefore(checkbox, newLi);

    clearInput();

};

let listId;
function listIdGenerator() {

    for (let i = 0; i < listItems.length; i++) {
        listId = i + 1;
    }
    console.log("new listId:", listId);
    return listId;
}

function chkBoxIdGenerator() {
    let listIdNum;
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    console.log(randomLetter);

    listIdNum = randomLetter + randomNum;

    return listIdNum;
}


function chkBoxClicked() {
    console.log("testing, testing, testing");

    console.log("inputValue: ", inputValue);
    let listItem = document.getElementById(listId);

    listItem.style.textDecoration = "line-through";
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