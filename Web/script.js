const showbutton = document.getElementById("showbutton");

showbutton.addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll(".product-cards.hidden, .product-cards.show");
  hiddenCards.forEach(function (card) {
    card.classList.toggle("hidden");
  });
});