/*eslint-env es7*/

const form = document.getElementById("form");
const name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Functions
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    const small = formcontrol.querySelector("small");
    small.innerText = message;
}

function comparePassword(input1, input2) {
    if(input1.value !== input2.value && input1.value !== ""){
        showError(input2 , "Passwords do not match");
    }
}
//Check if email is valid
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
        showError(email,"Email is not valid");
    }else{
        showSuccess(email);
    }
}




//Check names
function checkName(ArrInputs) {
    for (let i = 0; i < ArrInputs.length; i++) {
        if (ArrInputs[i].value === "") {
            showError(ArrInputs[i], ArrInputs[i].id + " Is required");
        } else {
            showSuccess(ArrInputs[i]);
        }
    }
}

//Event Listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkName([username, email, password, password2]);
    comparePassword(password, password2);
    validateEmail(email);
});
