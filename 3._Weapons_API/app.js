import express from "express";
import path from "path";
import {listOfWeapons} from "./weapon.js"
const app = express();
app.use(express.json());

const weaponList = listOfWeapons();

app.get("/weapons",(req,res) => {
    res.send({data : weaponList});
})

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

console.log(new Date().toTimeString());
//GET
app.get("/Today",(req,res) => {
    const date = new Date().toTimeString()
    
    res.send({
        date : date,
        year : new Date().getFullYear(),
        month : new Date().getMonth().toLocaleString(),
        day : new Date().getDay()

    })
})

// Post

app.post('/weapons', (req, res) => {
    const reqObj = req.body;
    
    const newWeapon = addWeapon(reqObj.name, reqObj.price)
    weapons.push(newWeapon);
    res.send({
        message: `${newWeapon.name} is now added to the collection`
    })
    
})








//PATCH
app.patch("/weapons/:id", (req, res) => {
    const reqId = Number(req.params.id);
    const reqObj = req.body;
    const weaponIndex = weapons.findIndex(weapon => weapon.id === reqId)
    if (weaponIndex !== -1) {
        const foundWeapon = weapons[weaponIndex];
        const weaponToUpdate = { ...foundWeapon, ...reqObj, id: reqId }
        res.send({
            data: weaponToUpdate
        });
        
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