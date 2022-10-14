const penIcon = document.querySelector('#penIcon');
const addItemButton = document.getElementById('add-item-btn');
const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('to-do-list');


penIcon.addEventListener('click', function () {
    inputField.focus();
});


addItemButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (inputField.value == '') return;
    if (inputField.value.trim().length == 0) {
        clearInput();
        return;
    };
    return addItem();
})



function addItem() {

    const newItemDiv = document.createElement('div');
    newItemDiv.setAttribute("class", "new-item-added");

    const newListItem = createListItem();
    const newCheckbox = createNewCheckbox();

    toDoList.appendChild(newItemDiv);
    newItemDiv.appendChild(newCheckbox);
    newItemDiv.appendChild(newListItem);

    clearInput();
};

function createListItem() {
    const newListItem = document.createElement('li');
    let inputValue = document.getElementById('inputField').value;
    newListItem.innerText = inputValue;
    newListItem.setAttribute("class", "list-style");
    return newListItem;
}

function createNewCheckbox() {
    const newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";
    newCheckbox.setAttribute("class", "newCheckbox")
    newCheckbox.addEventListener('click', (e) => {
        checkBoxClicked(e);
    });
    return newCheckbox;
}

function checkBoxClicked(e) {
    let currentCheckBox = e.target;
    let adjacentListItem = currentCheckBox.nextElementSibling;

    if (currentCheckBox.checked) {

        adjacentListItem.style.textDecoration = "line-through";
        let newDeleteBtn = document.createElement('i');
        newDeleteBtn.setAttribute("class", "fa-regular fa-trash-can delete-icon");
        newDeleteBtn.addEventListener('click', () => {
            removeItem(e);
        });
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