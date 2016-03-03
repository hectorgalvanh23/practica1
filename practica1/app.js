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
