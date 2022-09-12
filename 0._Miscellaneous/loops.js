const barbieMovies = [
    {name: "Swan Lake", year: 2000},
    {name: "Princess and the pauper", year: 2008},
    {name: "Fairies", year: 2014}
];

//forEach
//map, reduce, filter

barbieMovies.map(movie => movie.rating = Math.floor(Math.random() * 10) + 1 );
console.log(barbieMovies);