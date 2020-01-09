const filterCards = function(card) {
  return card.children[0].innerText.toLowerCase().includes(this.toLowerCase());
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

const filterCardsForNav = function(card) {
  let lookUp= Array.from(card.children[2].children);
  let typeLookUp = [];
  lookUp.forEach(type=>{typeLookUp.push(type.classList.value)});
  return typeLookUp.includes(this.toLowerCase())
}

const navOnclick = function(nav) {
  const navBar = document.getElementById('nav-bar');
  const navTags = Array.from(navBar.getElementsByClassName('navTag'));
  navTags.forEach(navTag => {
    navTag.classList.remove("selected");
  })
  nav.classList.add("selected")
;  const text = nav.innerText;
  const allCards = document.getElementsByClassName("cards");
  const cards = Array.from(allCards);
  cards.forEach(pokemon => {
    pokemon.style.display = "none";
  });
  let newCards = cards.filter(filterCardsForNav.bind(text));
  if(text == "All"){
    newCards = cards;
  }
  newCards.forEach(pokemon => {
    pokemon.style.display = "block";
  });
};