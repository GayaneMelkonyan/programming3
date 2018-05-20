var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name", function(req, res){
   res.send("<h1>Hello world name </h1>");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});

app.get("/search", function(req, res){
   res.redirect("http://www.google.com");
});

app.get("/*", function(req, res){
   res.send("<h1> 404 not found </h1>");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
