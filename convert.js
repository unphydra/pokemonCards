const data = require("./pokemon.json");

for (let i = 0; i < 151; i++) {
  const pokemon = data[i];
  let typeHtml = '<div class="backImage">';
  pokemon.types.forEach(type => {
    typeHtml = `${typeHtml}
    <div class="${type}">
    <img class="typeImg" src="./typePng/${type}.png" />
    </div>`;
  });
  typeHtml = `${typeHtml}\n</div>`;
  console.log(`<div class="cards">
  <h4>${pokemon.name}</h4>
  <div class="contents">
  <img
  class="pokImage"
  src="${pokemon.art_url}",
  alt="${pokemon.name}"
  />
  <div class="description desc_text">
  ${pokemon.description}
  </div>
  </div>
  ${typeHtml}
  </div>`);
}
