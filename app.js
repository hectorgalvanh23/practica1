<<<<<<< HEAD
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
    
    
    if(req.body.codigo==999){
    
    res.send("Ha iniciado sesion");
    }else{
        res.send("Error");
    }
});
app.listen(8080);
/*
var express= require("express");

var app = express();





app.get("/parametro",function(req, res) {
    
    var x=(req.param("cadena"));
    var i;
    
    var z=x.split("");
    var resultado=parseInt(z[0]);
    
    for(i=0;i<z.length;i++){
        if(z[i]==" "){
            resultado=resultado+parseInt(z[i+1]);
        } 
            else if(z[i]=="-"){
            resultado=resultado-parseInt(z[i+1]);
        }
            
        
    }
    
    
   
    //console.log(resultado);
     res.send("El resultado es: " + resultado);
   // res.send(resultado);

});
app.listen(8080);
*/
