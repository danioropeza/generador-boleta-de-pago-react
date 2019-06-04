const express=require("express");
const app=express();
var  bodyParser = require("body-parser");

var InterfazRepositorioEmpleado = require("../Almacenamiento/db/InterfazRepositorioEmpleado").InterfazRepositorioEmpleado;
var PersistenciaEmpleadoJSON = require("../../FrameworksYDrivers/BaseDeDatos/JSON/PersistenciaEmpleadoJSON").PersistenciaEmpleadoJSON;

var InterfazRepositorioBoleta = require("../Almacenamiento/db/InterfazRepositorioBoleta").InterfazRepositorioBoleta;
var PersistenciaBoletaJSON = require("../../FrameworksYDrivers/BaseDeDatos/JSON/PersistenciaBoletaJSON").PersistenciaBoletaJSON;

var ObtenerEmpleadosInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/ObtenerEmpleadosInteractor").ObtenerEmpleadosInteractor;
var GenerarBoletasInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/GenerarBoletasInteractor").GenerarBoletasInteractor;
var ObtenerBoletasInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/ObtenerBoletasInteractor").ObtenerBoletasInteractor;

var PresentadorGenerarBoletas = require("../Presentadores/PresentadorGenerarBoletas").PresentadorGenerarBoletas;
var PresentadorObtenerBoletas = require("../Presentadores/PresentadorObtenerBoletas").PresentadorObtenerBoletas;

const presentadorGenerarBoletas = new PresentadorGenerarBoletas();
const presentadorObtenerBoletas = new PresentadorObtenerBoletas();

const repositorioEmpleado = new InterfazRepositorioEmpleado(new PersistenciaEmpleadoJSON());
const repositorioBoleta = new InterfazRepositorioBoleta(new PersistenciaBoletaJSON());

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

app.get('/generarboletasdepagos',function(peticion,respuesta){
    const obtenerEmpleadosInteractor = new ObtenerEmpleadosInteractor(repositorioEmpleado);
    let respuestaInteractorEmpleados =  obtenerEmpleadosInteractor.obtenerEmpleados();
    const generarBoletasInteractor = new GenerarBoletasInteractor(repositorioBoleta, respuestaInteractorEmpleados);
    let respuestaInteractorGenerarBoletas =  generarBoletasInteractor.generarBoleta();
    let presentadorRespuesta =  presentadorGenerarBoletas.obtenerRespuesta(respuestaInteractorGenerarBoletas);
    respuesta.send(presentadorRespuesta);
});
app.get('/verboletadepagos',function(peticion,respuesta){  
    const obtenerBoletasInteractor = new ObtenerBoletasInteractor(repositorioBoleta);
    let respuestaInteractorObtenerBoletas =  obtenerBoletasInteractor.obtenerBoletas();
    let presentadorRespuesta =  presentadorObtenerBoletas.obtenerRespuesta(respuestaInteractorObtenerBoletas);
    respuesta.send(presentadorRespuesta);
});
app.listen(7001);
