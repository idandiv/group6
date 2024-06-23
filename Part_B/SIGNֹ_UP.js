document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

// Function to display messages using Bootstrap alerts
function displayMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('alert', `alert-${type}`);
    messageContainer.innerHTML = message;
    document.querySelector('.signup-form').prepend(messageContainer);

    setTimeout(() => {
        messageContainer.remove();
    }, 5000);
}

// Function to validate form inputs
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;

    let errors = [];

    // ניקוי הודעות שגיאה קודמות
    const existingErrors = document.querySelectorAll('.error-container, .alert');
    existingErrors.forEach(error => error.remove());

    // Validate name
    if (name.trim() === '') {
        errors.push('Name is required');
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errors.push('Invalid email address');
    }

    // Validate age
    const agePattern = /^\d+$/;
    if (!agePattern.test(age) || parseInt(age) < 18) {
        errors.push('Age must be a number and at least 18');
    }

    // Validate phone number
    const phonePattern = /^0\d{9}$/;
    if (!phonePattern.test(phone)) {
        errors.push('Phone number must start with 0 and be 10 digits long');
    }

    // Validate gender
    if (gender.trim() === '') {
        errors.push('Gender is required');
    }

    // Validate country
    if (country.trim() === '') {
        errors.push('Country is required');
    }

    // Display errors or success message
    if (errors.length > 0) {
        displayMessage(errors.join('<br>'), 'danger');
    } else {
        displayMessage('Signup successful!', 'success');
        // Optionally, you can submit the form here
        // signupForm.submit();
    }
}
