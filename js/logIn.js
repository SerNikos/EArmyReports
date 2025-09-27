// -----------------------------
// Form Validation
// -----------------------------
const formSignUpElem = document.querySelector("#logInForm");
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

      break;

    case "confirm-password":
      checkConfirmPassword();
      break;
  }

  updateSubmitState();
});

// Form submit event listener
formSignUpElem.addEventListener("submit", function (event) {
  if (submitBtn.disabled) {
    event.preventDefault();
    console.log("Form submission prevented due to validation errors.");
  } else {
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
  const nameInput = formSignUpElem.querySelector('[data-type="name"]');
  const passwordInput = formSignUpElem.querySelector('[data-type="password"]');

  // conditions: both must be valid
  const nameIsValid = nameInput.value.trim() !== "";
  const passwordIsValid = passwordInput.value.length >= 6;

  // also check that no errors are showing
  const noErrors = document.querySelectorAll(".error.show").length === 0;

  const formIsValid = nameIsValid && passwordIsValid && noErrors;

  submitBtn.disabled = !formIsValid;
  submitBtn.style.cursor = formIsValid ? "pointer" : "not-allowed";
}
