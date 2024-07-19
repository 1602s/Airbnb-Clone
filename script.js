document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateForm(name, email, password)) {
            alert('Registration successful!');
            registerForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    function validateForm(name, email, password) {
        if (!name || !email || !password) {
            return false;
        }
        // Add further validation logic if needed
        return true;
    }
});
