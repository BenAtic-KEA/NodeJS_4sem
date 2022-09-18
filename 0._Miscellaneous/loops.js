const barbieMovies = [
    {name: "Swan Lake", year: 2000},
    {name: "Princess and the pauper", year: 2008},
    {name: "Fairies", year: 2014}
];

//forEach
//map, reduce, filter

const ratedBarbieMovies = barbieMovies.map(movie => {
movie.rating = Math.floor(Math.random() * 10) + 1
return movie;
})
console.log("First",barbieMovies);
console.log("second",ratedBarbieMovies);


const newMovies = barbieMovies.filter(movie => movie.year > 2005)

console.log("third", newMovies)


/* Loop advice
Only use for loops if you are doing "finger counting"
I.E. counting to a number

Dont use enhanced for loops

Only use forEach if if you are doing something and don't car about the result.
I.E. populating the DOM with elements

Always prefer functional loop methods such as:
map, fulter and reduce

map for mapping 1:1
filter for filtering the array.
Reduce to reducing the content of the array
*/