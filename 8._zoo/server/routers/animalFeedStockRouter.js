import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js"


router.get("/animalfeedstock", async (req, res) => {
    const [rows,fields] = await db.query("SELECT * FROM animal_feed_stock;");
    res.send({data : rows})
})

router.post("/animalfeedstock", async (req,res) => {
    const { initialAmount, remainingAmount, feedTypeId } = req.body;

    if(!initialAmount){
        return res.status(400).send({message: "Missing the key initialAmount"})
    }
    if(!feedTypeId){
        return res.status(400).send({message: "Missing the key FeedtypeId"})
    }

    const data = await db.execute("INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (?,?,?);",[initialAmount,remainingAmount || initialAmount, feedTypeId])
    
    res.send({data})
})
export default router