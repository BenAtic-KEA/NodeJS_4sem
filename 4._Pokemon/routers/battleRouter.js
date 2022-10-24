import {Router} from "express";
const router = Router();

const battleResults = [];

router.post("/api/battles", (req,res) => {
    console.log(req.body);  
    battleResults.push(req.body);
    res.send({data: battleResults});
})

export default router
