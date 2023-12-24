const form = document.querySelector('.main-form');
const password = document.querySelector('#password');
console.log(password)
const confirmPassword = document.querySelector('#confirm-password');
const passErrorSpan = document.querySelector('input + span')
console.log(passErrorSpan);

//Will prevent form submission if passwords don't match
form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        addErrorCls(password);
        addErrorCls(confirmPassword);
        addErrorMsg();
        event.preventDefault();
    }
});

function addErrorCls(element) {
    element.classList.add('error');
}

function removeErrorCls(element) {
    element.classList.remove('error');
}

function addErrorMsg() {
    passErrorSpan.textContent = "Passwords doesn't match"
}