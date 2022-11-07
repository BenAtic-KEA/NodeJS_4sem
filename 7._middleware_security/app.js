import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());

import { rateLimit } from "express-rate-limit";

const routeLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
	max: 80, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(routeLimiter)

const frontdoorLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/frontdoor", frontdoorLimiter)

app.use("/frontdoor", frontDoorLimiter)

function ipLogger(req,res,next){
    console.log(req.ip);
    next()
}
// Bliver brugt globalt
// app.use(ipLogger)


function guidingButler(req,res,next) {
    console.log("this way, sir")
    next(); 
}

function guardMiddleware(req,res,next){
    if(req.query.name !== "Anders"){
        res.redirect("/error")
    }else 
    {
        console.log("You hit me!");
        next();
    }
}
// Brug guiding butler på alle  "room" endpoints
app.use("/room", guidingButler)

app.get("/frontdoor/:name", guardMiddleware,(req,res,next) => {
    res.send("Hello")
})

app.get("/room",(req,res,next) => {
    console.log("Room 1")
    next();
    res.send({message:"You are in room 1"});
});

app.get("/room",guidingButler,(req,res,next) => {
    console.log("Room 2")
    res.send({message:"You are in room 2"});
});

app.get("*", (req,res) => {
    res.send(`<h1>404</h1> <br> <br> <h3> Could not find the page`)
})

const PORT = 8080
app.listen(PORT, () => {console.log("Server is running on port",PORT)})