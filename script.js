const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('to-do-list');


penIcon.addEventListener('click', function () {
    inputField.focus();
});


function addItem() {

    let newItemDiv = document.createElement('div');
    newItemDiv.setAttribute("class", "item-added");

    let newListItem = document.createElement('li');
    let inputValue = document.getElementById('inputField').value;
    newListItem.innerText = inputValue;
    newListItem.setAttribute("class", "list-style");

    let newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";
    newCheckbox.setAttribute("class", "newCheckbox")
    newCheckbox.setAttribute("onclick", "chkBoxClicked(event)");

    toDoList.appendChild(newItemDiv);
    newItemDiv.appendChild(newCheckbox);
    newItemDiv.appendChild(newListItem);

    clearInput();
};

function chkBoxClicked(e) {
    let currentCheckBox = e.target;
    let adjacentListItem = currentCheckBox.nextElementSibling;

    if (currentCheckBox.checked) {

        adjacentListItem.style.textDecoration = "line-through";
        let newDeleteBtn = document.createElement('i');
        newDeleteBtn.setAttribute("class", "fa-regular fa-trash-can delete-icon");
        newDeleteBtn.setAttribute("onclick", "removeItem(event)");
        adjacentListItem.after(newDeleteBtn);
    } else {

        adjacentListItem.style.textDecoration = "none";

        let adjacentDeleteBtn = adjacentListItem.nextElementSibling;
        adjacentDeleteBtn.remove();
    }
}

function removeItem(e) {

    let currentDeleteBtn = e.target;
    currentDeleteBtn.parentElement.remove();
}

function clearInput() {
    document.getElementById('inputField').value = '';
};