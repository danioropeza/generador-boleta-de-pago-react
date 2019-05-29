const express=require("express");
const app=express();
var  bodyParser = require("body-parser");
var Empleado = require("../../ReglasDeNegocioEmpresa/Empleado/Empleado").Empleado;
var CalculadoraPorFijo = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorFijo").CalculadoraPorFijo;
var ClasificadorFechaDePagoFijo = require("../../ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoFijo").ClasificadorFechaDePagoFijo;
var InterfazRepositorioEmpleado = require("../Almacenamiento/db/InterfazRepositorioEmpleado").InterfazRepositorioEmpleado;
var PersistenciaEmpleadoMongoDB = require("../../FrameworksYDrivers/BaseDeDatos/Mongo/PersistenciaEmpleadoMongoDB").PersistenciaEmpleadoMongoDB;
var Interactor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/CrearEmpleado").Interactor;
var PeticionModeloEmpleado = require("../ModeloDePeticion/ModeloDePeticionEmpleado").PeticionModeloEmpleado;

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
app.get('/empleados',function(request,response){
    console.log("get empleados");
    var interfazGeneradorBoletaDePago = new InterfazGeneradorBoletaDePago(new GeneradorBoletaDePago());
});

app.post('/Empleado/nuevo',function(request,res){
    const requestModelUser = PeticionModeloEmpleado(request.body);

    //llevar a un metodo que se ejecute para todos...un mani 
    const repositorio = new InterfazRepositorioEmpleado(new PersistenciaEmpleadoMongoDB());
    const interactor = new Interactor(repositorio, requestModelUser);

    interactor.crearEmpleadoNuevo();
}); 

app.get('/Empleado/:ci',function(req,res){
    console.log("get Empleado");
});

app.put('/Empleado/:ci', function(req, res){
    console.log("put Empleado");
});

app.delete('/Empleado/:ci', function(req,res){
    console.log("delete Empleado");
});
app.listen(7000);