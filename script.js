alert("This is a fictional webpage, made by Gabriel Fernandes Ribeiro (GitHub: https://github.com/gabsschrodinger)");

let email = document.querySelector("input#exampleInputEmail1");
let fullName = document.querySelector("input#exampleInputPassword1");

let okName = false;
let okEmail = false;

function validateName() {
    if(fullName.value.length >= 3) okName = true;
}

function validateEmail() {
    if(email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1) okEmail = true;
}

function send() {
    if(okName == true && okEmail == true) {
        alert("Submitted!");
    } else {
        alert("Please, fill the form correctly before submitting");
    }
}