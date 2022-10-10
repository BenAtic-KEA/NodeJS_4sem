

//const pathvariables = location.pathname.split("/");
//const pokemonName = pathvariables.pop(); // fjerner sidste i arrayet men returnere det.



function getPokemonData(pokemonName) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => res.json())
        .then(data => {
            const battlingPokemonImage = document.getElementById("battling-pokemon-sprite");
            battlingPokemonImage.src = data.sprites.other.dream_world.front_default
            const iWon = Math.random() >= 0.5;
            whoWonHeader = document.getElementById("who-won");

            if(iWon){
                whoWonHeader.innerText = "You Won!"
            }else {
                whoWonHeader.innerText = "You lost!"
            }

        })
}


