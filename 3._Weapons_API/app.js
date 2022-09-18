import express from "express";
import path from "path";
import {listOfWeapons} from "./weapon.js"
const app = express();
app.use(express.json());

const weaponList = listOfWeapons();

app.get("/weapons",(req,res) => {
    res.send({data : weaponList});
})
app.listen(8080, () => console.log("server is running on port", 8080));