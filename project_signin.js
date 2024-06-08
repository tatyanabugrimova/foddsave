document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById("submitButton");
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    submitButton.addEventListener("click", function (event) {
        // Get the values from the input fields
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = document.getElementById('password').value.trim();

        // Check if all fields are filled out, if the email contains an '@' sign,
        // and if the name contains at least one space
        if (name !== '' && email !== '' && password !== '' && email.includes('@') && name.includes(' ')) {
            window.location.href = "account_page.html";
        } else {
            // Prevent form submission
            event.preventDefault();
            // Clear any previous error messages
            emailError.textContent = '';
            // Determine the error message
            let errorMessage = 'Please fill out all fields.';
            if (!email.includes('@')) {
                errorMessage = 'Email must contain an "@" sign.';
            } else if (!name.includes(' ')) {
                errorMessage = 'Please enter both name and a surname.';
            }
            alert(errorMessage);
        }
    });

    // Add input event listener to clear the error message when the user starts typing
    nameInput.addEventListener('input', function () {
        if (nameInput.value.includes(' ')) {
            nameInput.style.borderColor = '';
        }
    });

    // Add input event listener to clear the error message when the user starts typing
    emailInput.addEventListener('input', function () {
        if (emailInput.value.includes('@')) {
            emailError.textContent = '';
            emailInput.style.borderColor = '';
        }
    });
});