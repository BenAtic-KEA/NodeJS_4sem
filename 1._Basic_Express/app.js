//import
const express = require("express");
//instantiate the library express
const app = express();

// route      // callback function
app.get('/', (request, response) => {
  response.send({ message: "Created my first route. Check." })
});
        // endpoint
app.get("/deers", (req,res)=> {
res.send({size : "BIG"});
});

// Path variables
app.get("/deers/:id", (req,res) => {
  if(Number(req.params.id) === 1){
    res.send({
      name: "Bambi"
    });
  }else{
    res.send({
      unknown: "unknown"
    });
  }
});


// Query parameters
app.get("/actors",(req,res) => {
  res.send({
    message: "information about the actor",
    ...req.query
  });
});

app.get("/Cups", (req,res) => {
  res.send({
    type : "porcelain",
    amount : 12 
  })
})

//ways to send data with GET
// 1.  
// path variables
//deers/{id}

//2.
//query parameters (query string)
// ?key=value&key2=value2

  app.listen(8080);