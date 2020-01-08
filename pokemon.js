const searchPok = function() {
  const allCards = document.getElementsByClassName("cards");
  const cards = Array.from(allCards);
  cards.forEach(pokemon => {
    console.log(pokemon);

    pokemon.style.display = "none";
  });
};
