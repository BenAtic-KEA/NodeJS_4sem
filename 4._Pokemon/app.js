import express from "express";
import path from "path";
const app = express();
app.use(express.json());

// gør det muligt for client at få fat i filerne i den givent mappe.
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
});

app.get("/pokemon",(req,res) => {
   res.send({data: ["Slowpoke"]}); 
});

const PORT = process.env.PORT

const server = app.listen(PORT | 8080,(error)=>{
    if(error) {
        console.log(error);
    }
    console.log(`server is running on port`, server.address().port)
});