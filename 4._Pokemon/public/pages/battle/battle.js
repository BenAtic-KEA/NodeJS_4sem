const pathvariables = location.pathname.split("/");
const pokemonName = pathvariables.pop(); // fjerner sidste i arrayet men returnere det.


fetch(`/https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.abilities)
    })