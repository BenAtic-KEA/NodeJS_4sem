import { listOfWeapons, addWeapon } from "./weapon.js";
import express from "express";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const weapons = listOfWeapons().slice();

// GET

app.get('/', (req, res) => {
    res.send({ message: "You can do /weapons to see all weapons, or /weapons/{id} to get a specific weapon" })
});

app.get('/weapons', (req, res) => {
    res.send({
        message: `this is your arsenal to choose from 1 to ${weapons.length}:  ${weapons.map(w => w.name).join(", ")}`
    });
});

app.get('/weapons/:id', (req, res) => {
    
    const reqId = Number(req.params.id)

    if (weapons.find(weapon => weapon.id === reqId)) {
        const chosenWeapon = weapons.find(weapon => weapon.id === reqId)
        res.send({
            message: `you chose ${chosenWeapon.name} as your weapon, it costs ${chosenWeapon.price}`
        });
    } else {
        res.send({
            message: "we dont have the requested weapon"
        });
    }
});

// Post

app.post('/weapons', (req,res) => {
    const reqObj = req.body;
    
    console.log(req.body);
    const newWeapon = addWeapon(reqObj.name,reqObj.price)
    weapons.push(newWeapon);
    console.log(weapons);
    res.send(`${newWeapon.name} is now added to the collection`);

})


// PUT

app.put("/weapons/:id",(req,res) => {
    const reqId = Number(req.params.id);
    const reqObj = req.body;

    if (weapons.find(weapon => weapon.id === reqId)) {
        const oldWeapon = Object.assign({},weapons.find(weapon => weapon.id === reqId))
        const chosenWeapon = weapons.find(weapon => weapon.id === reqId)
        chosenWeapon.name = reqObj.name;
        chosenWeapon.price = reqObj.price;
        res.send({
            message: `you changed ${oldWeapon.name} to ${reqObj.name} and its price from ${oldWeapon.price} to ${reqObj.price}`
        });
    } else {
        res.send({
            message: "we dont have the requested weapon"
        });
    }
});





app.listen(8080);   