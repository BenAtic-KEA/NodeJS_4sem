import express from "express";
const app = express();

app.use(express.json());


import path from "path";
app.use(express.static(path.resolve("../client/dist")));

import cors from "cors";
app.use(cors());

import animalsRouter from "./routers/animalsRouter.js";
app.use(animalsRouter);

import animalFeedTypes from "./routers/animalFeedTypesRouter.js"
app.use(animalFeedTypes);

import animalFeedStock from "./routers/animalFeedStockRouter.js"
app.use(animalFeedStock);

const PORT = 8080 || process.env.PORT
app.listen(PORT, () => console.log(`Server is running on port`, PORT));