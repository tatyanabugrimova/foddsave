// Function to redirect the user to the "try_project.html" page
function redirectToProjectPage() {
    window.location.href = "try_project.html";
}

// Get the DOM element with the ID "createShoppingListImage"
const createShoppingListImage = document.getElementById("createShoppingListImage");

// Add a click event listener to the "createShoppingListImage" element
// When the element is clicked, the redirectToProjectPage function will be executed
createShoppingListImage.addEventListener("click", redirectToProjectPage);