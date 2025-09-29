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



// navigation tabs
const tabs = document.getElementById('tabsNav');
console.log(tabs);

// Event Delegation: Add a click event listener to the parent .dropdown-menu container
tabs.addEventListener('click', function(event) {
    // Check if the clicked element is a tab
    if (event.target.classList.contains('tab')) {
        const activeTab = document.querySelector('.tab.active');
        const activeContent = document.querySelector('.content.active');

        // Remove active classes from current active tab and content
        if (activeTab)
            activeTab.classList.remove('active');
        if (activeContent)
            activeContent.classList.remove('active');

        // Add active class to the clicked tab
        event.target.classList.add('active');

        // Show the associated content
        const contentId = event.target.getAttribute('data-content');
        const contentToShow = document.getElementById(contentId);
        contentToShow.classList.add('active');
    }
});


const signoutBtnElem = document.querySelector("#signoutBtn");
signoutBtnElem.addEventListener("click", ()=>{
  window.location.href = "html/logIn.html";
})