import express from "express";
import { incrementVisitorCounter } from "./geocitiesUtil.js";
import path from "path"

const app = express();
app.use(express.static("public"))

app.get("/",(req,res) => { 
    console.log("Visitors since the server start", incrementVisitorCounter())
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
})






app.listen(8080, () => console.log("Server is running on port", 8080));