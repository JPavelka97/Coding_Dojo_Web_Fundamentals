console.log("script online")

var pokeDiv = document.querySelector('#pokemonData');
var pokeSearch =document.querySelector('#pokeSearch');


async function getPokeData() {

    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeSearch.value);
    var PokeData = await response.json();

    pokeDiv.innerHTML += `<h1>Pokemon Name: ${PokeData.name}</h1>`
    pokeDiv.innerHTML += `<img src='${PokeData.sprites.front_shiny}'>`


    // console.log(PokeData.abilities[0]);
}
    
// getPokeData();
