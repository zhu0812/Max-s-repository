// 1. Find the parts of the page we need to work with
const addButtons = document.querySelectorAll(".add");
const orderList = document.querySelector("#order-list");
const totalText = document.querySelector("#total");
const form = document.querySelector("#order-form");
const message = document.querySelector("#message");

// 2. Variables that remember the order so far
let total = 0;
let itemCount = 0;

// 3. When any "Add" button is clicked, add that item to the order
addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    // The first time, remove the "Nothing added yet." line
    if (itemCount === 0) {
      orderList.innerHTML = "";
    }

    // Make a new list item and put it on the page
    const li = document.createElement("li");
    li.textContent = name + "  ¥" + price;
    orderList.appendChild(li);

    // Update the running total
    total = total + price;
    itemCount = itemCount + 1;
    totalText.textContent = total;
  });
});

// 4. When the form is submitted, check it and show a confirmation
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the browser reloading the page

  const name = document.querySelector("#name").value.trim();
  const pickup = document.querySelector("#pickup").value;

  if (itemCount === 0) {
    showMessage("Please add at least one item first.", "error");
    return;
  }

  if (pickup === "") {
    showMessage("Please choose a time.", "error");
    return;
  }

  const orderNumber = Math.floor(Math.random() * 900) + 100;
  showMessage("Thanks " + name + "! Order #" + orderNumber +
              " will be ready at " + pickup + ".", "success");
});

// 5. A small helper function that shows a message box
function showMessage(text, type) {
  message.textContent = text;
  message.className = "message " + type;
  message.hidden = false;
}
