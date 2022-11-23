const firstName = document.querySelector("#firstNameInput"); //Selecciona por id o como en css
const lastName = document.getElementById("lastNameInput"); //selecciona exclusivamente por id
var emailAddress = document.getElementById("emailInput");
const password = document.querySelector("#passInput");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailAddressError = document.getElementById("emailError");
const passError = document.getElementById("passError");

const button = document.querySelector("#button");

button.addEventListener('click', (event)=>{
    event.preventDefault(); //Detiene el comportamiento por defecto
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty', 'Valid');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty', 'Valid');
    validateEmail(emailAddress.value, emailAddress, emailAddressError);
    validatePassword(password.value, password, passError);
    //console.log(firstName.placeholder);
});

function validateEmpty(valueInput, divInput, divError, error, check) {
    if(valueInput.length == 0){
        showError(divInput, divError, error);
    }
    else {
        hideError(divInput, divError, check);
    }
}

function showError(divInput, divError, error) {
    divInput.style.border = "1px solid var(--red)";
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
    <p class="error">${error}</p>`;
    divInput.placeholder = "";
}

function hideError(divInput, divError, check) {
    divInput.style.border = "1px solid var(--grayishBlue)";
    divError.innerHTML = `<img class="icon-check" src="./images/icon-check.svg" alt="">
    <p class="check">${check}</p>`;
}

function validateEmail (valueInput, divInput, divError) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;


    if(valueInput.length >= 1) {
        if(expReg.test(valueInput) == true) {
            hideError(divInput, divError, 'Valid Email');
        }
        else {
            showError(divInput, divError, 'Looks like this is not an email');
        }
    }
    else {
        showError(divInput, divError, 'Looks like this is not an email');
        divInput.placeholder = "email@example/com";
        emailAddressError.previousElementSibling.classList.add('colorP');
    }

}

function validatePassword (valueInput, divInput, divError) {
    let expRegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if(valueInput.length >= 1) {
        if(expRegPass.test(valueInput)) {
            hideError(divInput, divError, 'Valid Password');
        }
        else {
            showError(divInput, divError, 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and can contain special characters.');
        }
    }
    else {
        showError(divInput, divError, 'Password cannot be empty');
    }
}