const data = require("./pokemon.json");
console.log(data);

for (let i = 0; i < 151; i++) {
  console.log(`<div class="cards">
  <h4>${data[i].name}</h4>
  <div>
  <img class="pokImage"
    src=${data[i].art_url},
    alt=${data[i].name}
    />
    </div>
    </div>
  `);
}
