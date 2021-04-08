let clo = document.getElementsByClassName("modal-close");
let mod = document.querySelectorAll("a[href='#open-modal1']");


function f1() {
    document.body.style.overflow = "hidden"; 
    document.body.style.height = "80vh"; 
    document.body.style.boxShadow = "inset -30px -400px 300px 200px #f5f4f4";
    
}

function f2() {
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto"; 
    document.body.style.boxShadow = "none";
    
}


// When the user clicks anywhere outside of the modal, close it

/* window.onclick = function(event) {
  if (event.target == modal) {
    a.style.display = "hidden";
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto";  
  }
}  */