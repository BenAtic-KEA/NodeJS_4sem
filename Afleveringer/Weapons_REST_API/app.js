import { listOfWeapons, addWeapon } from "./weapon.js";
import express from "express";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static("public"));

let weapons = listOfWeapons();

// GET

app.get('/', (req, res) => {
    res.send({ 
        message: "You can do /weapons to see all weapons, or /weapons/{id} to get a specific weapon" 
    })
});

app.get('/weapons', (req, res) => {
    res.send({
        message: `this is your arsenal to choose from 1 to ${weapons.length}: ${weapons.map(w => `[${w.id}].${w.name}`).join(", ")}`
    });
});

app.get('/weapons/:id', (req, res) => {

    const reqId = Number(req.params.id)
    const chosenWeapon = weapons.find(weapon => weapon.id === reqId)

    if (chosenWeapon) {
        res.send({
            data: chosenWeapon,
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

    const newWeapon = addWeapon(reqObj.name, reqObj.price)
    weapons.push(newWeapon);
    res.send({
        message: `${newWeapon.name} is now added to the collection`
    })

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
    const weaponIndex = weapons.findIndex(weapon => weapon.id === reqId)
    if (weaponIndex !== -1) {
        const foundWeapon = weapons[weaponIndex];
        const weaponToUpdate = {...foundWeapon, ...reqObj, id: reqId}
        res.send( {data : weaponToUpdate});
        
    } else {
        res.status(404).send({
            message: "we dont have the requested weapon"
        });
    }
});

//Delete
app.delete("/weapons/:id", (req, res) => {

    const reqId = Number(req.params.id);
    const weaponIndex = weapons.findIndex(weapon => weapon.id === reqId)

    if (weaponIndex !== -1) {
        const deletedWeapon = weapons.splice(weaponIndex, 1);
        res.send(
            {
                data: deletedWeapon
            }
        );
    } else {
        res.status(404).send({ message: "we dont have the requested weapon" });

    }
})

app.listen(8080, () => console.log("server is running on port", 8080));   
