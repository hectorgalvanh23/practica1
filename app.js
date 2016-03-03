var express = require("express");
var bodyParser=require("body-parser");
var app = express();

app.use("/static",express.static('assets'));


app.use(bodyParser.json());// Application/JSON
app.use(bodyParser.urlencoded({extends:true}));//Formularios multi pack
app.set("view engine","jade");

app.get("/", function(req, res){
   res.render("index"); 
});


app.get("/login", function(req, res) {
    res.render("login");
});

app.post("/login", function(req, res){
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.codigo);
    
    
    if(req.body.codigo==994){
    
    res.send("Ha iniciado sesion");
    }else{
        res.send("Error");
    }
});
app.listen(8080);