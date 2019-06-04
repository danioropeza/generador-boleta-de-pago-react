const express=require("express");
const app=express();
var  bodyParser = require("body-parser");

var InterfazRepositorioEmpleado = require("../Almacenamiento/db/InterfazRepositorioEmpleado").InterfazRepositorioEmpleado;
var PersistenciaEmpleadoJSON = require("../../FrameworksYDrivers/BaseDeDatos/JSON/PersistenciaEmpleadoJSON").PersistenciaEmpleadoJSON;

var InterfazRepositorioBoleta = require("../Almacenamiento/db/InterfazRepositorioBoleta").InterfazRepositorioBoleta;
var PersistenciaBoletaJSON = require("../../FrameworksYDrivers/BaseDeDatos/JSON/PersistenciaBoletaJSON").PersistenciaBoletaJSON;

var ObtenerEmpleadosInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/ObtenerEmpleadosInteractor").ObtenerEmpleadosInteractor;
var GenerarBoletasInteractor = require("../../ReglasDeNegocioAplicacion/CasosDeUso/GenerarBoletasInteractor").GenerarBoletasInteractor;
var PresentadorGenerarBoletas = require("../Presentadores/PresentadorGenerarBoletas").PresentadorGenerarBoletas;

const presentadorGenerarBoletas = new PresentadorGenerarBoletas();

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
    let respuestaInteractorBoletas =  generarBoletasInteractor.generarBoleta();
    let presentadorRespuesta =  presentadorGenerarBoletas.obtenerRespuesta(respuestaInteractorBoletas);
    respuesta.send(presentadorRespuesta);
});
app.get('/verboletadepagos',function(peticion,respuesta){  

});
app.listen(7001);
