function changeImage(id, url) {
  document.getElementById(id).src = url;
}
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

let pokemon = [];
let pokemonIndex = 0;

async function loadPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292");
  const data = await response.json();
  pokemon = data.results;
  showPokemon();
}

async function showPokemon() {
  const pokemonAtual = pokemon[pokemonIndex];
  const response = await fetch(pokemonAtual.url);
  const data = await response.json();

  const imageUrl = data.sprites.front_default || "../assets/missingno.png";

  changeText("name", data.name);
  changeImage("img_sprite_front_default", imageUrl);
  }

loadPokemonList();
function previousPokemon() {
  pokemonIndex -= 1;
  if (pokemonIndex < 0) {
  pokemonIndex = pokemon.length - 1;
  }
  showPokemon();
}

function nextPokemon() {
  pokemonIndex +=1;
  if (pokemonIndex >= pokemon.length){
    pokemonIndex = 0;
  }
  showPokemon();
}
