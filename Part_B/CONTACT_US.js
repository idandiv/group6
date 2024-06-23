document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateContactForm();
    });
});

// Function to display messages using Bootstrap alerts
function displayMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('alert', `alert-${type}`);
    messageContainer.innerHTML = message;
    document.querySelector('.contact-form').prepend(messageContainer);

    setTimeout(() => {
        messageContainer.remove();
    }, 5000);
}

// Function to validate contact form inputs
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let errors = [];

    // ניקוי הודעות שגיאה קודמות
    const existingErrors = document.querySelectorAll('.alert');
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

    // Validate message
    if (message.trim() === '') {
        errors.push('Message is required');
    }

    // Display errors or success message
    if (errors.length > 0) {
        displayMessage(errors.join('<br>'), 'danger');
    } else {
        displayMessage('Message sent successfully!', 'success');
        // Optionally, you can submit the form here
        // contactForm.submit();
    }
}
