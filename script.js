
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
