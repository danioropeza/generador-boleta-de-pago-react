const express=require("express");
const app=express();

var  bodyParser = require("body-parser");
var InterfazRepositorioEmpleado = require("../Almacenamiento/db/InterfazRepositorioEmpleado").InterfazRepositorioEmpleado;
var PersistenciaEmpleadoJSON = require("../../FrameworksYDrivers/BaseDeDatos/JSON/PersistenciaEmpleadoJSON").PersistenciaEmpleadoJSON;

var CrearEmpleadoInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/CrearEmpleadoInteractor").CrearEmpleadoInteractor;
var ObtenerEmpleadosInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/ObtenerEmpleadosInteractor").ObtenerEmpleadosInteractor;
var ObtenerUnEmpleadoInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/ObtenerUnEmpleadoInteractor").ObtenerUnEmpleadoInteractor;
var EliminarEmpleadoInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/EliminarEmpleadoInteractor").EliminarEmpleadoInteractor;


var PeticionModeloEmpleado = require("../ModeloDePeticion/ModeloDePeticionEmpleado").PeticionModeloEmpleado;

var PresentadorCrearEmpleado = require("../Presentadores/PresentadorCrearEmpleado").PresentadorCrearEmpleado;
var PresentadorObtenerEmpleados = require("../Presentadores/PresentadorObtenerEmpleados").PresentadorObtenerEmpleados;
var PresentadorObtenerUnEmpleado = require("../Presentadores/PresentadorObtenerUnEmpleado").PresentadorObtenerUnEmpleado;
var PresentadorEliminarEmpleado = require("../Presentadores/PresentadorEliminarEmpleado").PresentadorEliminarEmpleado;

const repositorio = new InterfazRepositorioEmpleado(new PersistenciaEmpleadoJSON());

const presentadorCrearEmpleado = new PresentadorCrearEmpleado();
const presentadorObtenerEmpleados = new PresentadorObtenerEmpleados();
const presentadorObtenerUnEmpleado = new PresentadorObtenerUnEmpleado();
const presentadorEliminarEmpleado = new PresentadorEliminarEmpleado();

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

app.get('/empleados',function(peticion,respuesta){
    const obtenerEmpleadosInteractor = new ObtenerEmpleadosInteractor(repositorio);
    let respuestaInteractor =  obtenerEmpleadosInteractor.obtenerEmpleados();
    let presentadorRespuesta =  presentadorObtenerEmpleados.obtenerRespuesta(respuestaInteractor);
    respuesta.send(presentadorRespuesta);
});

app.post('/empleado/nuevo', function(peticion,respuesta){
    const requestModelUser = PeticionModeloEmpleado(peticion.body);
    const crearEmpleadoInteractor = new CrearEmpleadoInteractor(repositorio, requestModelUser);
    let respuestaInteractor =  crearEmpleadoInteractor.crearEmpleadoNuevo();
    let presentadorRespuesta =  presentadorCrearEmpleado.obtenerRespuesta(respuestaInteractor);
    respuesta.send(presentadorRespuesta);
}); 

app.get('/empleado/:ci',function(peticion,respuesta){
    let ci = parseInt(peticion.params.ci).toString();
    const obtenerUnEmpleadoInteractor = new ObtenerUnEmpleadoInteractor(repositorio);
    let respuestaInteractor =  obtenerUnEmpleadoInteractor.obtenerUnEmpleado(ci);
    let presentadorRespuesta =  presentadorObtenerUnEmpleado.obtenerRespuesta(respuestaInteractor);
    respuesta.send(presentadorRespuesta);
});

app.put('/empleado/:ci', function(req, res){
    console.log("put Empleado");
});

app.delete('/empleado/:ci', function(peticion,respuesta){
    let ci = parseInt(peticion.params.ci).toString();
    const eliminarEmpleadoInteractor = new EliminarEmpleadoInteractor(repositorio);
    let respuestaInteractor = eliminarEmpleadoInteractor.eliminarEmpleado(ci);
    let presentadorRespuesta = presentadorEliminarEmpleado.obtenerRespuesta(respuestaInteractor);
    respuesta.send(presentadorRespuesta);
});
app.listen(7000);
