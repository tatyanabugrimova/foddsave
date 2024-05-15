document.addEventListener('DOMContentLoaded', function() {
    var addProductButton = document.getElementById('addProduct');
    var productList = document.getElementById('productList');

    addProductButton.addEventListener('click', function() {
        var productInput = document.getElementById('productInput').value;
        var quantityInput = document.getElementById('quantityInput').value;

        if (productInput.trim() !== '' && quantityInput.trim() !== '') {
            var productItem = document.createElement('div');
            productItem.className = 'productItem';

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                // Toggle completed class
                if (checkbox.checked) {
                    productItem.classList.add('completed');
                } else {
                    productItem.classList.remove('completed');
                }
            });

            var label = document.createElement('label');
            label.textContent = productInput + ' - ' + quantityInput;

            productItem.appendChild(checkbox);
            productItem.appendChild(label);
            productList.appendChild(productItem);

            // Clear input fields after adding product
            document.getElementById('productInput').value = '';
            document.getElementById('quantityInput').value = '';
        } else {
            alert('Please  both product and quantity.');
        }
    });
});