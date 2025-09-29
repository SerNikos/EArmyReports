// New Request Elements
const buttonElementNewReq = document.querySelector("#btnNewRequest");
const inputElement = document.querySelector("#initialInput");
const listItemElem = document.querySelector("#reqList");

// Add New Request Handler
function addNewRequest() {
  window.location.href = "/html/logIn.html";
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