// Select elements
let groceryInp = document.querySelector("#grocery-input");
let addBtn = document.querySelector("#submit-btn");
let groceryList = document.querySelector("#grocery-list");

let editElement = null; // currently editing item
let editMode = false;

// Add / Edit button click
addBtn.addEventListener("click", () => {
    let inputValue = groceryInp.value.trim();
    if (inputValue === "") {
        alert("Kindly Enter a Grocery Item");
        return;
    }

    if (!editMode) {
        // Normal add
        createGroceryItem(inputValue);
    } else {
        // Edit mode
        editElement.querySelector(".title").textContent = inputValue;
        editMode = false;
        editElement = null;
        addBtn.textContent = "Add";
    }

    groceryInp.value = "";
});

// Function to create a grocery item in UI
function createGroceryItem(value) {
    let itemGrocery = document.createElement("div");
    itemGrocery.classList.add("grocery-item");

    let singleItem = document.createElement("p");
    singleItem.classList.add("title");
    singleItem.textContent = value;
    itemGrocery.appendChild(singleItem);

    // Actions
    let actions = document.createElement("div");
    actions.classList.add("actions");

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    delBtn.textContent = "Delete";

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    itemGrocery.appendChild(actions);

    groceryList.appendChild(itemGrocery);

    // Delete functionality
    delBtn.addEventListener("click", () => {
        itemGrocery.remove();
    });

    // Edit functionality
    editBtn.addEventListener("click", () => {
        groceryInp.value = singleItem.textContent;
        editMode = true;
        editElement = itemGrocery;
        addBtn.textContent = "Edit";
        // Optional: move item to top
        groceryList.insertBefore(itemGrocery, groceryList.firstChild);
    });
}