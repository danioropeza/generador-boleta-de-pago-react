const express=require("express");
const app=express();
var  bodyParser = require("body-parser");

var InterfazRepositorioEmpleado = require("../Almacenamiento/db/InterfazRepositorioEmpleado").InterfazRepositorioEmpleado;
var PersistenciaEmpleadoMongoDB = require("../../FrameworksYDrivers/BaseDeDatos/Mongo/PersistenciaEmpleadoMongoDB").PersistenciaEmpleadoMongoDB;


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

app.get('/generadorBoletadepagos',function(req,res){
    const repositorio = new InterfazRepositorioEmpleado(new PersistenciaEmpleadoMongoDB());
    var todosLosEmpleados = repositorio.devolverTodosLosEmpleado();
    console.log("bla entrada");
    console.log(todosLosEmpleados);
    console.log("bla");
    /* 
    const requestModelUser = PeticionModeloEmpleado(request.body);
    
    //llevar a un metodo que se ejecute para todos...un mani 
    const crearEmpleado = new CrearEmpleado(repositorio, requestModelUser);

    crearEmpleado.crearEmpleadoNuevo();

    var interfazGeneradorBoletaDePago = new InterfazGeneradorBoletaDePago(new GeneradorBoletaDePago());
    */
});
app.listen(7001);
