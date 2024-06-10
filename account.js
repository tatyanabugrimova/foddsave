// Function to redirect the user to the "try_project.html" page
function redirectToProjectPage() {
    window.location.href = "try_project.html";
}

// Get the DOM element with the ID "createShoppingListImage"
const createShoppingListImage = document.getElementById("createShoppingListImage");

// Add a click event listener to the "createShoppingListImage" element
// When the element is clicked, the redirectToProjectPage function will be executed
createShoppingListImage.addEventListener("click", redirectToProjectPage);

document.addEventListener('DOMContentLoaded', function () {
    // Получаем имя из Local Storage
    var name = localStorage.getItem('userName');

    // Проверяем, есть ли сохраненное имя
    if (name) {
        document.getElementById('userName').textContent = name;
    }
});