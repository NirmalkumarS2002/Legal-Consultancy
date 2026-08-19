const conname = document.getElementById("conname");
const conemail = document.getElementById("conemail");
const conno = document.getElementById("conno");
const conser = document.getElementById("conser");
const context = document.getElementById("context");
const conbtn = document.querySelector(".conbtn");


// =========================
// NAME - Only letters & space
// =========================
conname.addEventListener("input", () => {

    // Remove numbers and special characters
    conname.value = conname.value.replace(/[^A-Za-z\s]/g, "");

});


// =========================
// PHONE - Only numbers
// =========================
conno.addEventListener("input", () => {

    // Remove letters and special characters
    conno.value = conno.value.replace(/[^0-9]/g, "");

    // Maximum 10 digits
    if (conno.value.length > 10) {
        conno.value = conno.value.slice(0, 10);
    }

});


// =========================
// Error function
// =========================
function showError(input, message) {

    const parent = input.parentElement;
    const error = parent.querySelector(".errmsg");

    error.textContent = message;
    input.style.borderColor = "#ECA438";
}


// =========================
// Clear Error
// =========================
function clearError(input) {

    const parent = input.parentElement;
    const error = parent.querySelector(".errmsg");

    error.textContent = "";
    input.style.borderColor = "";
}


// =========================
// Submit Validation
// =========================
conbtn.addEventListener("click", (e) => {

    e.preventDefault();

    let valid = true;


    // Name
    if (conname.value.trim() === "") {

        showError(conname, "Please enter your name");
        valid = false;

    } else if (conname.value.trim().length < 3) {

        showError(conname, "Name must contain at least 3 characters");
        valid = false;

    } else {

        clearError(conname);
    }


    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (conemail.value.trim() === "") {

        showError(conemail, "Please enter your email");
        valid = false;

    } else if (!emailPattern.test(conemail.value.trim())) {

        showError(conemail, "Please enter a valid email");
        valid = false;

    } else {

        clearError(conemail);
    }


    // Phone
    if (conno.value.trim() === "") {

        showError(conno, "Please enter your phone number");
        valid = false;

    } else if (conno.value.length !== 10) {

        showError(conno, "Phone number must contain 10 digits");
        valid = false;

    } else {

        clearError(conno);
    }


    // Services
    if (conser.value.trim() === "") {

        showError(conser, "Please enter a service");
        valid = false;

    } else {

        clearError(conser);
    }


    // Case details
    if (context.value.trim() === "") {

        showError(context, "Please tell us about your case");
        valid = false;
    }
    else {

        clearError(context);
    }


    // All valid
    if (valid) {

    const submitMsg = document.getElementById("submitMsg");

    submitMsg.textContent = "Submitted Successfully!";
    submitMsg.style.color = "green";

    // Clear form
    conname.value = "";
    conemail.value = "";
    conno.value = "";
    conser.value = "";
    context.value = "";

    // Hide message after 3 seconds
    setTimeout(() => {
        submitMsg.textContent = "";
    }, 3000);
}

});