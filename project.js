function onPageLoaded() {
    // Get the add product button and the product list container
    const addProductButton = document.getElementById('addProduct');
    const productList = document.getElementById('productList');

    // Add an event listener to the add product button
    addProductButton.addEventListener('click', function() {
        // Get the values from the input fields
        const productInput = document.getElementById('productInput').value;
        const quantityInput = document.getElementById('quantityInput').value;

        // Check if both fields are not empty after trimming whitespace
        if (productInput.trim() !== '' && quantityInput.trim() !== '') {
            // Create a new product item div
            const productItem = document.createElement('div');
            productItem.className = 'productItem';

            // Create a checkbox input element
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            // Add an event listener to toggle the completed class
            checkbox.addEventListener('change', function() {
                // Toggle the 'completed' class based on checkbox state
                if (checkbox.checked) {
                    productItem.classList.add('completed');
                } else {
                    productItem.classList.remove('completed');
                }
            });

            // Create a label to display the product and quantity
            const label = document.createElement('label');
            label.textContent = `${productInput} - ${quantityInput}`;

            // Append the checkbox and label to the product item
            productItem.appendChild(checkbox);
            productItem.appendChild(label);
            // Append the product item to the product list
            productList.appendChild(productItem);

            // Clear the input fields after adding the product
            document.getElementById('productInput').value = '';
            document.getElementById('quantityInput').value = '';
        } else {
            // Alert the user if either field is empty
            alert('Please enter both product and quantity.');
        }
    });
}

// Execute the onPageLoaded function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', onPageLoaded);

const newName = document.getElementById("shoppingListName");
const shoppingListTag = document.getElementById("shoppingListTag");
const addListNameButton = document.getElementById("addListName");

addListNameButton.addEventListener("click", function() {
    // Set the text content of shoppingListTag to the value of newName
    shoppingListTag.textContent = newName.value;

    // Remove the input field and the button
    newName.remove();
    addListNameButton.remove();
});