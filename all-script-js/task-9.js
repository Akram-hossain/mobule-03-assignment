function validateForm(e) {
    e.preventDefault();

    clearErrors();

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // name Validate 
    if (name.trim() === '' || !name.match(/^[a-zA-Z\s]+$/)) {
        document.getElementById('nameErr').textContent = 'Name fileds should not be empty and only letters.';
        isValid = false;
    }

    // email Validate 
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        document.getElementById('emailErr').textContent = 'Please Provide Valid Email Address.';
        isValid = false;
    }

    // password Validate 
    if (password.length < 8 || !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        document.getElementById('passwordErr').textContent = 'Password at least 8 characters long and contain at least one digit, one uppercase letter, one lowercase letter.';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordErr').textContent = 'Your Passwords do not match.';
        isValid = false;
    }

    // Submit the form if all fields are valid
    if (isValid) {
        document.getElementById('mainForm').submit();
    }
}

function clearErrors() {
    document.getElementById('nameErr').textContent = '';
    document.getElementById('emailErr').textContent = '';
    document.getElementById('passwordErr').textContent = '';
    document.getElementById('confirmPasswordErr').textContent = '';
}