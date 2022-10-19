let inputEmail = document.getElementById("email");
let messageError = document.getElementById("error");
let button = document.getElementById("button");

button.addEventListener('click', (event)=> {
    event.preventDefault();
    // console.log("Se hizo click");
    validateEmail(inputEmail.value);
});

function validateEmail (email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(expReg.test(email) == true) {
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
        inputEmail.value = "";
    }
    else {
        inputEmail.style.border = '1px solid hsl(354, 100%, 66%)';
        error.style.visibility = 'visible';
    }
}