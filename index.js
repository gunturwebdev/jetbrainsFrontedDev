function openPopup(obj) {
    let window = obj.parentElement.parentElement.lastElementChild;
    window.classList.toggle("show");
}

function closePopup(obj) {
    let window = obj.parentElement;
    window.classList.remove("show");
}

function toggleMenu(obj) {
    let menu = obj.parentElement.lastElementChild;
    menu.classList.toggle("show");
}