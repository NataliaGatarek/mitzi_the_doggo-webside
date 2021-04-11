
document.getElementById("bg").style.backgroundImage = "url(orange-texture.jpg)";
document.getElementById("card3").style.backgroundColor = "grey";
document.getElementById("card2").style.backgroundColor = "grey";
document.getElementById("card1").style.backgroundColor = "grey";
var para = document.createElement("p");
var node = document.createTextNode("Galery with the pictures of Mitzi and Zlata");
para.appendChild(node);
var element = document.getElementById("galery");
element.appendChild(para);

document.getElementById("body2").style.backgroundImage = "url(orange-texture.jpg)";
document.getElementById("galery").style.fontSize = "27px";
document.getElementById("galery").style.fontWeight = "600";
var para = document.createElement("p");
var node = document.createTextNode("Blog about adventures of Mitzi and Zlata");
para.appendChild(node);
var element = document.getElementById("blog1");
element.appendChild(para);
document.getElementById("blog1").style.fontSize = "27px";
document.getElementById("blog1").style.fontWeight = "600";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




