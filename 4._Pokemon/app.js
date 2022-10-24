import express from "express";
import { renderPage, injectData } from "./util/templateEngine.js";
const app = express();
app.use(express.json());
app.use(express.static("public"));
import battleRouter from "./routers/battleRouter.js";
import pokemonRouter from "./routers/pokemonRouter.js";
// gør det muligt for client at få fat i filerne i den givent mappe.
app.use(pokemonRouter);
app.use(battleRouter);
const frontpagePage = renderPage("frontpage/frontpage.html",{tabTitle : "Pokemon", cssLink :`<link rel="stylesheet" href="./pages/frontpage/frontpage.css"` })
const battlePage = renderPage("battle/Battle.html",{tabTitle :"Battle", cssLink: `<link rel="stylesheet" href="./pages/battle/battle.css"`})


app.get("/",(req,res) => {
    res.send(frontpagePage);
});

app.get("/battle/:pokemonName",(req,res) => {

    res.send(battlePage.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
})

const randomPokemon = ["Pikachu","Slowpoke","ditto"];
app.get("/battle",(req,res) => {
    let currentPokemon = randomPokemon[Math.floor(Math.random()*4)] 
    let battlePageWithData = injectData(battlePage,moves);
    res.redirect(`battle/${currentPokemon}`)
    res.send(battlePageWithData.replace("%%TAB_TITLE%%"),`Battle ${req.params.pokemonName}`)
})
app.get("/contact", (req,res) => {
    res.send(contactpagePage)
}) 

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT,(error)=>{
    if(error) {
        console.log(error);
    }
    console.log(`server is running on port`, server.address().port)
});
