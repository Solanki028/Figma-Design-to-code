// Get the form element
const form = document.querySelector('.signup-form form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create an object to store the form data
    const formData = {
        firstName: form.querySelector('input[placeholder="First name"]').value,
        lastName: form.querySelector('input[placeholder="Last name"]').value,
        email: form.querySelector('input[placeholder="Email address"]').value,
        phone: form.querySelector('input[placeholder="Phone Number"]').value,
        password: form.querySelector('input[placeholder="Create password"]').value,
    };

    // Log the form data as an object in the console
    console.log(formData);
});
