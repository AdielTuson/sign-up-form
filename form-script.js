const form = document.querySelector('.main-form');
const password = document.querySelector('#password');
console.log(password)
const confirmPassword = document.querySelector('#confirm-password');
const passErrorSpan = document.querySelector('input + span')
console.log(passErrorSpan);

//Will prevent form submission if passwords don't match
form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert("Passwords Don't match. Please try again")
    }
});
