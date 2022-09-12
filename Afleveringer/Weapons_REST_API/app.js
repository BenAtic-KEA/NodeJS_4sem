const weapon = require("./weapon");
const express = require("express");
const app = express();

const weapons = weapon.weaponlist().slice();

app.get('/', (req, res) => {
    res.send({ message: "You can do /weapons to see all weapons, or /weapons/{id} to get a specific weapon" })
});

app.get('/weapons', (req, res) => {
    res.send({
        message: `this is your arsenal to choose from 1 to 4:  ${weapons.map(w => w.name).join(", ")}`
    });
});

app.get('/weapons/:id', (req, res) => {
    if (Number(req.params.id) <= weapons.length && Number(req.params.id > 0)) {
        const chosenWeapon = weapons[Number(req.params.id) - 1]
        res.send({
            message: `you chose ${chosenWeapon.name} as your weapon, it costs ${chosenWeapon.price}`
        });
    } else {
        res.send({
            message: "we dont have the requested weapon"
        });
    }
});


app.listen(8080);   