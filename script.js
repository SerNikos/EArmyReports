// New Request Elements
const buttonElementNewReq = document.querySelector("#btnNewRequest");
const inputElement = document.querySelector("#initialInput");
const listItemElem = document.querySelector("#reqList");

// Add New Request Handler
function addNewRequest() {
    const inputValue = inputElement.value.trim();

    if (inputValue !== "") {
        const newReq = document.createElement("li");
        newReq.textContent = inputValue;
        newReq.style.padding = "5px";
        newReq.style.backgroundColor = "green";
        newReq.style.color = "white";
        newReq.style.borderRadius = "5px";

        const btnDeleteElem = document.createElement("button");
        btnDeleteElem.textContent = "Delete";
        btnDeleteElem.style.marginLeft = "10px";
        btnDeleteElem.style.borderRadius = "5px";

        // Add delete functionality
        btnDeleteElem.addEventListener("click", () => {
            newReq.remove();
        });

        newReq.appendChild(btnDeleteElem);
        listItemElem.appendChild(newReq);
        inputElement.value = "";
    }
}

// Event Listeners for New Request
buttonElementNewReq.addEventListener("click", addNewRequest);
inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); // prevent form submission if inside a form
        addNewRequest();
    }
});

// Theme Toggle
const bodyElement = document.querySelector("body");
const buttonElementTheme = document.querySelector("#btnTheme");

buttonElementTheme.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});

// -----------------------------
// Form Validation
// -----------------------------

const formSignUpElem = document.querySelector("#signUpForm");

// Helper function to show/hide error messages
function toggleError(id, isValid, message) {
    const errorElem = document.getElementById(id);
    if (!errorElem) return;

    if (isValid) {
        errorElem.style.display = "none";
    } else {
        errorElem.textContent = message;
        errorElem.style.display = "block";
    }
}

// Check confirm password matches password
function checkConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordsMatch = password === confirmPassword && confirmPassword !== "";

    toggleError("idConfirmPasswordError", passwordsMatch, "Passwords do not match");
}

// Input validation on typing
formSignUpElem.addEventListener("input", function (e) {
    const input = e.target;
    const inputType = input.getAttribute("data-type");
    let isValid = true;

    switch (inputType) {
        case "name":
            isValid = input.value.trim() !== "";
            toggleError("idNameError", isValid, "Name cannot be empty");
            break;
        case "email":
            isValid = input.value.includes("@") && input.value.trim() !== "";
            toggleError("idEmailError", isValid, "Email must contain '@'");
            break;
        case "password":
            isValid = input.value.length >= 6;
            toggleError("idPasswordError", isValid, "Password must be at least 6 characters long");
            checkConfirmPassword();
            break;
        case "confirm-password":
            checkConfirmPassword();
            break;
    }

    // Optional: enable/disable submit button here by checking if errors exist
    const hasVisibleErrors = document.querySelectorAll(".error[style*='display: block']").length > 0;
    const formIsValid = !hasVisibleErrors;
});

// Prevent form submission if invalid
formSignUpElem.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from submitting by default

    // Trigger validation on all fields again
    const inputs = formSignUpElem.querySelectorAll("input[data-type]");
    inputs.forEach(input => input.dispatchEvent(new Event('input')));

    const hasErrors = document.querySelectorAll(".error[style*='display: block']").length > 0;

    if (!hasErrors) {
        alert("Form submitted successfully!");
        // You can proceed with actual submission here, e.g. formSignUpElem.submit();
    } else {
        alert("Please fix errors before submitting.");
    }
});
