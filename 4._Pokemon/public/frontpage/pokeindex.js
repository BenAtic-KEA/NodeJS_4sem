const pokelist = document.getElementById("pokelist");
const battle = document.getElementById("battle");
fetch("/api/pokemon")
.then(response => response.json())
.then((result)=> {
        result.data.results.forEach(pokemon => {
            const pokemonIndividualDiv = document.createElement("div")
            const pokemonNameP = document.createElement("p");
                pokemonNameP.innerText = pokemon.name;
                
                pokemonIndividualDiv.appendChild(pokemonNameP);
                pokelist.appendChild(pokemonIndividualDiv);
        })
})


/*
setTimeout(() => {
    window.location.replace("/battle")
},3000);
*/