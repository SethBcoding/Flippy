function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.className === "links") {
    x.className += " show";
  } else {
    x.className = "links";
  }
}


// script.js

document.addEventListener('DOMContentLoaded', function() {
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});
});

