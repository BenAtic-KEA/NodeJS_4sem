import express from "express";
import { renderPage, injectData } from "./util/templateEngine.js";
const app = express();
app.use(express.json());

// gør det muligt for client at få fat i filerne i den givent mappe.
app.use(express.static("public"));

const frontpagePage = renderPage("frontpage/frontpage.html",{tabTitle : "Pokemon", cssLink :`<link rel="stylesheet" href="./pages/frontpage/frontpage.css"` })
const battlePage = renderPage("battle/Battle.html",{tabTitle :"", cssLink: `<link rel="stylesheet" href="./pages/battle/battle.css"`})


app.get("/",(req,res) => {
    res.send(frontpagePage);
});

app.get("/battle/:pokemonName",(req,res) => {
    res.send(battlePage.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
})
app.get("/battle",(req,res) => {
    const randomPokemon = "pikachu"; // fetch
    let battlePageWithData = injectData(battlePage,randomPokemon);
    res.send(battlePageWithData.replace("%%TAB_TITLE%%"),`Battle ${req.params.pokemonName}`)
})
app.get("/contact", (req,res) => {
    res.send(contactpagePage)
}) 

app.get("/api/pokemon",(req,res) => {
   fetch("https://pokeapi.co/api/v2/pokemon")
   .then(response => response.json())
   .then(result => {
       res.send({data: result}); 
   })
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT,(error)=>{
    if(error) {
        console.log(error);
    }
    console.log(`server is running on port`, server.address().port)
});
