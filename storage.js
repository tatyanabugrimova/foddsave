function onPageLoaded() {
    // Get the add product button and the product list container
    const productList = document.getElementById('storageList');
    var food= {
        ingredient: "kiwi",
        quantity: 3
    }

    var food1= {
        ingredient: "apple",
        quantity: 1
    }

    var food2= {
        ingredient: "banana",
        quantity: 10
    }

    var foodArray= []
    foodArray.push (food)
    foodArray.push (food1)
    foodArray.push (food2)

    for (let i=0; i< foodArray.length; i++) {
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
    label.textContent = `${foodArray[i].ingredient} - ${foodArray[i].quantity}`;

    // Append the checkbox and label to the product item
    productItem.appendChild(checkbox);
    productItem.appendChild(label);
    // Append the product item to the product list
    productList.appendChild(productItem);
    console.log(productItem)

}
}

// Execute the onPageLoaded function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', onPageLoaded);