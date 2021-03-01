// Get the modal
var modal = document.getElementById("share_modal");
// Set modal display to 'none'
modal.style.display = "none";

// Get the button that opens the modal
var button = document.getElementById("share_button");

// Get the second button
var hide_button = document.getElementById("hide_button");

hide_button.addEventListener("click", function () {
  if (modal.style.display == "block") {
    modal.style.display = "none";
  } else if (modal.style.display == "none") {
    modal.style.display = "block";
  }
});

button.addEventListener("click", function () {
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else if (modal.style.display == "block") {
    modal.style.display = "none";
  }
});
