"use strict";

const characterImage = document.querySelector(".character__img");
const characterName = document.querySelector("#name");
const characterGender = document.querySelector("#gender");
const characterSpecies = document.querySelector("#species");
const characterHomeWorld = document.querySelector("#homeworld");

document.querySelector(".generate__btn").addEventListener('click', (e) => {
    e.preventDefault();
    characterName.innerHTML = '<em>Loading...</em>';
    characterGender.innerHTML = '<em>Loading...</em>';
    characterSpecies.innerHTML = '<em>Loading...</em>';
    characterHomeWorld.innerHTML = '<em>Loading...</em>';

    const randomNumber = Math.ceil(Math.random()*88);

    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => response.json())
        .then(character => {
            characterImage.src = character.image;
            characterName.innerHTML = character.name;
            characterGender.innerHTML = character.gender;
            characterSpecies.innerHTML = character.species;
            characterHomeWorld.innerHTML = character.homeworld;
        })


})