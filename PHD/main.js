function display(element) {
  document.getElementById("image").innerHTML = element.alt;
}

function revert() {
  document.getElementById("image").innerHTML =
    "Hover over sunsign image to display details";
}
