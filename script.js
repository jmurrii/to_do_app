const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
const addItemBtn = document.getElementById('add-item-btn');
const toDoList = document.getElementById('to-do-list');
let inputValue;
let newLi;
let newCheckbox;
let thisDeleteIcon;
let siblingCheckbox;
let newDeleteIcon;
let listItem;
let nextSibling;
let currentCheckBox;

penIcon.addEventListener('click', function () {
    inputField.focus();
});



function addItem() {

    newLi = document.createElement('li');
    inputValue = document.getElementById('inputField').value;
    newLi.innerText = inputValue;
    newLi.setAttribute("class", "list-style");


    newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";
    newCheckbox.setAttribute("class", "newCheckbox")
    newCheckbox.setAttribute("onclick", "chkBoxClicked(event)");

    // (B2) APPEND TO LIST

    toDoList.appendChild(newLi);
    toDoList.insertBefore(newCheckbox, newLi);

    clearInput();
};


function chkBoxClicked(e) {
    currentCheckBox = e.target;
    nextSibling = currentCheckBox.nextElementSibling;

    if (currentCheckBox.checked) {

        nextSibling.style.textDecoration = "line-through";

        newDeleteIcon = document.createElement('i');
        newDeleteIcon.setAttribute("class", "fa-regular fa-trash-can delete-icon");
        newDeleteIcon.setAttribute("onclick", "removeItem(event)");
        nextSibling.append(newDeleteIcon);

    } else {
        nextSibling.style.textDecoration = "none";
        newDeleteIcon.remove();
    }
}

function removeItem(e) {

    thisDeleteIcon = e.target;
    siblingCheckbox = thisDeleteIcon.parentElement.previousElementSibling;

    thisDeleteIcon.parentElement.remove();
    siblingCheckbox.remove();

}

function clearInput() {
    document.getElementById('inputField').value = '';
};

