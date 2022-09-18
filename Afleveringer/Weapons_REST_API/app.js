import { listOfWeapons, addWeapon } from "./weapon.js";
import express from "express";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static("public"));

let weapons = listOfWeapons().slice();

// GET

app.get('/', (req, res) => {
    res.send({ message: "You can do /weapons to see all weapons, or /weapons/{id} to get a specific weapon" })
});

app.get('/weapons', (req, res) => {
    res.send({
        message: `this is your arsenal to choose from 1 to ${weapons.length}: ${weapons.map(w => `[${w.id}].${w.name}`).join(", ")}`
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

app.post('/weapons', (req, res) => {
    const reqObj = req.body;

    console.log(req.body);
    const newWeapon = addWeapon(reqObj.name, reqObj.price)
    weapons.push(newWeapon);
    console.log(weapons);
    res.send(`${newWeapon.name} is now added to the collection`);

})


// PUT

app.put("/weapons/:id", (req, res) => {
    const reqId = Number(req.params.id);
    const reqObj = req.body;

    if (weapons.find(weapon => weapon.id === reqId)) {
        const oldWeapon = Object.assign({}, weapons.find(weapon => weapon.id === reqId))
        const weaponToEdit = weapons.find(weapon => weapon.id === reqId)
        weaponToEdit.name = reqObj.name;
        weaponToEdit.price = reqObj.price;
        res.send({
            message: `you changed ${oldWeapon.name} to ${reqObj.name} and its price from ${oldWeapon.price} to ${reqObj.price}`
        });
    } else {
        res.send({
            message: "we dont have the requested weapon"
        });
    }
});


//PATCH
app.patch("/weapons/:id", (req, res) => {
    const reqId = Number(req.params.id);
    const reqObj = req.body;

    if (weapons.find(weapon => weapon.id === reqId)) {
        const oldWeapon = Object.assign({}, weapons.find(weapon => weapon.id === reqId))
        const weaponToEdit = weapons.find(weapon => weapon.id === reqId)

        if (weaponToEdit.name !== reqObj.name && reqObj.name !== undefined) {
            weaponToEdit.name = reqObj.name
            res.send(
                {
                    message: `name of weapon id: ${weaponToEdit.id} is changed from ${oldWeapon.name} to ${weaponToEdit.name}`
                })
        } else if (weaponToEdit.price !== reqObj.price && reqObj.price !== undefined) {
            weaponToEdit.price = reqObj.price;
            res.send(
                {
                    message: `name is changed of weapon id: ${weaponToEdit.id} from ${oldWeapon.price} to ${weaponToEdit.price}`
                })
        } else {
            res.send({
                message: `nothing is changed`
            })
        }
    } else {
        res.send({
            message: "we dont have the requested weapon"
        });
    }
});

//Delete
app.delete("/weapons/:id", (req, res) => {

    const reqId = Number(req.params.id)

    if (weapons.find(weapon => weapon.id === reqId)) {
        const chosenWeapon = Object.assign({}, weapons.find(weapon => weapon.id === reqId))
        weapons = weapons.filter(weapon => weapon.id !== reqId);
        res.send(
            {
                message: `[${chosenWeapon.id}] ${chosenWeapon.name} is now deleted from the collection`
            }
        );
    } else {
        res.send(
            {
                message: "we dont have the requested weapon"
            }
        );
    }
})


app.listen(8080, () => console.log("server is running on port", 8080));   
