"use strict";

let list = [];
let pokemons = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(resp => resp.json())
    .then(data => {
        list = data.results;
        list.forEach(poke => {
            fetch(poke.url)
                .then(response => response.json())
                .then(pokeData => {
                    pokemons.push(pokeData)
                });
        });
    });

window.onload = function () {
    setTimeout(buildlist, 3000);

    function buildlist() {
        console.log(pokemons);
    }
    // build list with html and templates literals
    // add to html
}
