const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("add");
const listItems = document.getElementById("list-items");

addButton.onclick = () => {
  if (inputBox.value === "") {
    alert("Fill out the input box");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listItems.appendChild(listItem);

    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
    });
  }

  inputBox.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.classList.add("");
  listItems.appendChild(deleteButton);
};

listItems.addEventListener("click", function (e) {
  if (e.target.tagName === "") {
  }
});
