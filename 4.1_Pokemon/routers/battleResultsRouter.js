import { Router } from "express";
import battleRouter from "./battleRouter.js"
const router = Router();


router.get("/api/battleResults/winsandlosses", (req,res) => {
    const winsAndLosses = battleRouter.battleResults.reduce((acc,battleResults) => {
        battleResults.iWon? acc.wins++ : acc.losses++;
        return acc
    }, {wins:0, losses:0});
    res.send(winsAndLosses)   
})

router.get("/api/battleResults/pokemonbattled", (req,res) => {

})

export default router