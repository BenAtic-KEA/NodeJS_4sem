import express from "express";
import path from "path";
const app = express();
app.use(express.json());

// gør det muligt for client at få fat i filerne i den givent mappe.
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});

app.get("/battle",(req,res) => {
    res.sendFile(path.resolve("public/battle/battle.html"))
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