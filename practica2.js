var express= require("express");

var app = express();
app.set("view engine","coffee");
app.engine ('coffee', require('coffeecup').__express);



app.get("/", function(req,res){
  
   
    res.render( "index", {"parrafo": "Hola Mundo"});//nombre de la vista que quieres renderizar
});


app.listen(8080);