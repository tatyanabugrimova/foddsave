function onPageLoaded() {
    const addProductButton = document.getElementById('addProduct');
    const productList = document.getElementById('productList');

    addProductButton.addEventListener('click', function() {
        const productInput = document.getElementById('productInput').value;
        const quantityInput = document.getElementById('quantityInput').value;

        if (productInput.trim() !== '' && quantityInput.trim() !== '') {
            const productItem = document.createElement('div');
            productItem.className = 'productItem';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    productItem.classList.add('completed');
                } else {
                    productItem.classList.remove('completed');
                }
            });

            const label = document.createElement('label');
            label.textContent = `${productInput} - ${quantityInput}`;

            productItem.appendChild(checkbox);
            productItem.appendChild(label);
            productList.appendChild(productItem);

            document.getElementById('productInput').value = '';
            document.getElementById('quantityInput').value = '';
        } else {
            alert('Please enter both product and quantity.');
        }
    });
}

document.addEventListener('DOMContentLoaded', onPageLoaded);

const newName = document.getElementById("shoppingListName");
const shoppingListTag = document.getElementById("shoppingListTag");
const addListNameButton = document.getElementById("addListName");

addListNameButton.addEventListener("click", function() {
    shoppingListTag.textContent = newName.value;
    
    newName.remove();
    addListNameButton.remove();
});