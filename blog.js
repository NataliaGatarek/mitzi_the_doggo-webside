
document.getElementById("bg").style.backgroundImage = "url(orange-texture.jpg)";
document.getElementById("card3").style.backgroundColor = "grey";
document.getElementById("card2").style.backgroundColor = "grey";
document.getElementById("card1").style.backgroundColor = "grey";
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
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var para = document.createElement("p");
var node = document.createTextNode("Our vacation in Kleve was very nice. We had so much fun there.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var para = document.createElement("p");
var node = document.createTextNode("Winter in Berlin this year was very long and cold.");
para.appendChild(node);
var element = document.getElementById("div2");
element.appendChild(para);
// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var para = document.createElement("p");
var node = document.createTextNode("The New Years Day we spent at the Sea side, in Heringsdorf");
para.appendChild(node);
var element = document.getElementById("div3");
element.appendChild(para);

var para = document.createElement("p");
var node = document.createTextNode("Galery with the pictures of Mitzi and Zlata");
para.appendChild(node);
var element = document.getElementById("galery");
element.appendChild(para);
document.getElementById("galery").style.backgroundImage = "url(orange-texture.jpg)";
