const penIcon = document.querySelector('#penIcon');
const inputField = document.getElementById('inputField');
const addItemBtn = document.getElementById('add-item-btn');




penIcon.addEventListener('click', function () {
    inputField.focus();
});


const newLi = document.createElement('li');
const newP = document.createElement('p');

// let inputValue = document.getElementById('inputField').value;
// console.log(inputValue);

console.log(newLi);
newLi.setAttribute("class", "list-style")
newP.setAttribute("class", "p-style")
// newP.innerText = "Hello, World!";

const toDoListItem = document.getElementById('to-do-container').getElementsByTagName('ul')[0];



addItemBtn.addEventListener('click', () => {
    toDoListItem.appendChild(newLi);
    newLi.appendChild(newP);

    let inputValue = document.getElementById('inputField').value;
    console.log(inputValue);
    newP.innerText = inputValue;
});

// could do a function called runWhenAddItemIsClicked
// that calls all the little functions