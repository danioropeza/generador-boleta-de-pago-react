const express=require("express");
const app=express();
var  bodyParser = require("body-parser");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(__dirname+'/site'));

app.get('/', function(req,res){
    console.log("home");

});

//192.168.3.95
app.get('/empleados',function(req,res){
    console.log("get empleados");
    var interfazGeneradorBoletaDePago = new InterfazGeneradorBoletaDePago(new GeneradorBoletaDePago());
});

app.post('/empleado/nuevo',function(req,res){
    console.log("post empleado");
});

app.get('/empleado/:ci',function(req,res){
    console.log("get empleado");
});

app.put('/empleado/:ci', function(req, res){
    console.log("put empleado");
});

app.delete('/empleado/:ci', function(req,res){
    console.log("delete empleado");
});
app.listen(7000);