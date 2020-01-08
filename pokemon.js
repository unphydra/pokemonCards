const filterCards = function(card) {
  return card.children[0].innerText.includes(this);
};

const searchPok = function() {
  const allCards = document.getElementsByClassName("cards");
  const cards = Array.from(allCards);
  cards.forEach(pokemon => {
    pokemon.style.display = "none";
  });
  const searchBar = document.getElementById("searchBar");
  const text = searchBar.value;
  const newCards = cards.filter(filterCards.bind(text));
  newCards.forEach(pokemon => {
    pokemon.style.display = "block";
  });
};
