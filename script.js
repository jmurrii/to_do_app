const penIcon = document.querySelector('#penIcon');
const inputItem = document.getElementById('inputItem');
const addItemButton = document.getElementById('add-item-btn');


penIcon.addEventListener('click', function () {
    inputItem.focus();
});



addItemButton.addEventListener('click', () => {
    alert("okay good, we've wired up the button");
});

