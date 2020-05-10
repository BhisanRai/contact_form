// Form validation
var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {

    let formElems = e.target.elements;
    let name = formElems.name.value;
    let email = formElems.email.value;
    let phone = formElems.phone.value;
    let message = formElems.message.value;
    let isFormValid = true;

    // check all empty fields
    if(isEmpty(name) || isEmpty(email) || isEmpty(phone) || isEmpty(message)) {
        displayError("Please fill all fields.");
        isFormValid = false;
    }
    else if(!validateName(name)) {
        displayError("Name must contain letters and space only.");
        isFormValid = false;
    }
    else if(!validateEmail(email)) {
        displayError("Please enter valid email.");
        isFormValid = false;
    } 
    else if(!validatePhone(phone)) {
        displayError("Please enter mobile number only (9{8/7}________).");
        isFormValid = false;
    }


    if(!isFormValid) {
        e.preventDefault();
    }

});


    // Check empty
    function isEmpty(value) {
        if(value.trim() === '') {
            return true;
        }
        return false;
    }

    function validateName(value) {
        let name = value.trim();
        let pattern = /^[a-zA-Z ]*$/gm;
        if(name.match(pattern)) {
            return true;
        }
        return false;
    }

    function validateEmail(value) {
        let email = value.trim();
        let pattern = /^[a-zA-Z0-9\.\_]+@[a-zA-Z0-9\.\_]+\.[a-zA-Z\.\_]+$/gm;
        if(email.match(pattern)) {
            return true;
        }
        return false;
    }

    function validatePhone(value) {
        let phone = value.trim();
        let pattern = /^9[{8|7}][0-9]{8}$/gm;
        if(phone.match(pattern)) {
            return true;
        }
        return false;
    }

    function displayError(msg) {
        document.getElementById('errorMsg').innerText = msg;
    }