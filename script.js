
// Menu bar functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// myCards page - tabbed interface
function showBenefits(cardNumber) {
  const cards = document.querySelectorAll(".benefits");

  cards.forEach(card => {
      card.style.display = "none"; // Hide all cards
  });
  document.getElementById("card" + cardNumber).style.display = "flex"; // Show the selected card
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// let mouseDown = false;
// let startX, scrollLeft;
// const slider = document.querySelector('.parent');

// const startDragging = (e) => {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// }

// const stopDragging = (e) => {
//   mouseDown = false;
// }

// const move = (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// }

// // Add the event listeners
// slider.addEventListener('mousemove', move, false);
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);