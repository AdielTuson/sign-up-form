const form = document.querySelector('.main-form');
const password = document.querySelector('#password');
console.log(password)
const confirmPassword = document.querySelector('#confirm-password');

//Will check the password fields for equality
function checkPasswordMatch() {
    if (password.value === confirmPassword.value) {
        console.log('passwords dont match')
    }
}

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        console.log('passwords dont match')
    }
});

// confirmPassword.addEventListener('input', checkPasswordMatch);