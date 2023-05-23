function validateForm(){
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let comment = document.forms["myForm"]["comment"].value;

    let errorMessageElem = document.getElementById("error-message");
    errorMessageElem.innerHTML = "";
    let isValid = true;

    // Name Validations

    const nameRegExp = /^[a-zA-Z\'\s]+$/;
    if(firstName == "" || !nameRegExp.test(firstName)) {
        errorMessageElem.innerHTML = "Invalid name, must include valid characters only!";
        isValid = false;
    }
    if(lastName == "" || !nameRegExp.test(lastName)) {
        errorMessageElem.innerHTML = "Invalid name, must include valid characters only!";
        isValid = false;
    }

    // Email Validation
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email == "" || !emailRegExp.test(email)) {
        errorMessageElem.innerHTML = "Invalid email, please write a proper email!";
        isValid = false;
    }

    // Comment character limit validation
    const commentRegExp = /^.{1, 150}$/;
    if(comment == "" || commentRegExp.test(comment)) {
        errorMessageElem.innerHTML = "Invalid comment, must be above one word and cannot exceed 150 characters!";
        isValid = false;
    }
    // If there is any validation failure, do not submit the form
    if(!isValid) {
        event.preventDefault();
    }
}