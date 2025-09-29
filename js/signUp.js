// -----------------------------
// Form Validation
// -----------------------------
const formSignUpElem = document.querySelector("#signUpForm");
const submitBtn = formSignUpElem.querySelector("button[type='submit']");
console.log(submitBtn);
submitBtn.disabled = true; // initially disabled
formSignUpElem.addEventListener("input", function (event) {
  const input = event.target;
  const inputType = input.getAttribute("data-type");
  let isValid = true;

  switch (inputType) {
    case "name":
      isValid = input.value.trim() !== "";
      toggleError("idNameError", isValid, "Name cannot be empty.");
      break;

    case "email":
      isValid = input.value.includes("@");
      toggleError("idEmailError", isValid, "Please enter a valid email.");
      break;

    case "password":
      isValid = input.value.length >= 6;
      toggleError(
        "idPasswordError",
        isValid,
        "Password must be at least 6 characters long."
      );
      checkConfirmPassword(); // also re-check confirm password
      break;

    case "confirm-password":
      checkConfirmPassword();
      break;
  }

  updateSubmitState();
});

// Confirm password check
function checkConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const match = password === confirmPassword && confirmPassword !== "";
  toggleError("idConfirmPasswordError", match, "Passwords do not match");
  updateSubmitState();
}

// Form submit event listener
formSignUpElem.addEventListener("submit", function (event) {
  if (submitBtn.disabled) {
    event.preventDefault();
    console.log("Form submission prevented due to validation errors.");
  } else {
    // Redirect to login page
    window.location.href = "html/logIn.html";
    console.log("Form submitted successfully!");
  }
});

// Show or hide error message based on validity
function toggleError(errorId, isValid, errorMessage) {
  const errorElement = document.getElementById(errorId);
  if (!errorElement) return; // prevent crashes if wrong id
  if (isValid) {
    errorElement.classList.remove("show"); // fade out
  } else {
    errorElement.textContent = errorMessage;
    errorElement.classList.add("show"); // fade in
  }
}

// Update submit button state
function updateSubmitState() {
  const formIsValid = document.querySelectorAll(".error.show").length === 0;
  submitBtn.disabled = !formIsValid;
  submitBtn.style.cursor = formIsValid ? "pointer" : "not-allowed";
}
