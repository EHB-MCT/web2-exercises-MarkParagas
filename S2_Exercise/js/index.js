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


    function showPokemon() {
        pokemons.forEach( poke => {
            let html = `
            <img src="${sprites.front_default}">
                <h3>nr.${order}</h3>
                <h2>${name}</h2>
                <div id="type">
                    <h2>${types[0].type.name}</h2>
                    <h2>${types[1].type.name}</h2>
                </div>
            `
        }) 
    }
    
/*
    let html = `
        <img src="${sprites.front_default}">
            <h3>nr.${order}</h3>
            <h2>${name}</h2>
            <div id="type">
                <h2>${types[0].type.name}</h2>
                <h2>${types[1].type.name}</h2>
            </div>
        `
*/
    // build list with html and templates literals
    // add to html
    
    setTimeout(buildlist, 3000);

    function buildlist() {
        console.log(pokemons);
    }
}


