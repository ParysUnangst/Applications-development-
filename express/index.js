const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



//Hello world router page
app.get("/", function(req,res){
res.send("Hello World!")
});
// about page router
app.get("/about", function(req,res){
res.send("Parys' about page");
    
});

app.get('*', function(req, res){
    res.status(404).send("404 Page Not Found");
  });


app.listen(port, function(){
    console.log(`You are currently using port ${port}!`);
});

