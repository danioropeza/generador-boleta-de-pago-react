const express=require("express");
const app=express();

var  bodyParser = require("body-parser");
var InterfazRepositorioEmpleado = require("../Almacenamiento/db/InterfazRepositorioEmpleado").InterfazRepositorioEmpleado;
var PersistenciaEmpleadoJSON = require("../../FrameworksYDrivers/BaseDeDatos/JSON/PersistenciaEmpleadoJSON").PersistenciaEmpleadoJSON;
var CrearEmpleado = require("../../ReglasDeNegocioAplicacion/CasosDeUso/CrearEmpleado").CrearEmpleado;
var PeticionModeloEmpleado = require("../ModeloDePeticion/ModeloDePeticionEmpleado").PeticionModeloEmpleado;
var PresentadorCrearEmpleado = require("../Presentadores/PresentadorCrearEmpleado").PresentadorCrearEmpleado;
const repositorio = new InterfazRepositorioEmpleado(new PersistenciaEmpleadoJSON());
const presentadorCrearEmpleado = new PresentadorCrearEmpleado();

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

app.get('/empleados',function(request,response){
    console.log("get empleados");
    var interfazGeneradorBoletaDePago = new InterfazGeneradorBoletaDePago(new GeneradorBoletaDePago());
});

app.post('/empleado/nuevo', function(request,res){
    const requestModelUser = PeticionModeloEmpleado(request.body);
    const crearEmpleado = new CrearEmpleado(repositorio, requestModelUser);
    let respuesta =  crearEmpleado.crearEmpleadoNuevo();
    res.send( presentadorCrearEmpleado.presentarRespuesta(respuesta));
}); 

app.get('/empleado/:ci',function(req,res){
    console.log("get Empleado");
});

app.put('/empleado/:ci', function(req, res){
    console.log("put Empleado");
});

app.delete('/empleado/:ci', function(req,res){
    console.log("delete Empleado");
});
app.listen(7000);
