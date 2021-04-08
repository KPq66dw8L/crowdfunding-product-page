// When the user clicks the button, open the modal 
let btn = document.getElementById(open-modal1);
let a = document.getElementsByClassName(modal-close);

btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on <a> (x), close the modal
a.onclick = function() {
  modal.style.display = "hidden";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    a.style.display = "hidden";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto";  // ADD THIS LINE
  }
}