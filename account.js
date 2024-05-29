function redirectToProjectPage() {
    window.location.href = "try_project.html";
}

const createShoppingListImage = document.getElementById("createShoppingListImage");

createShoppingListImage.addEventListener("click", redirectToProjectPage);