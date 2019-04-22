let express = require('express');
let bodyParser = require('body-parser');
let db = require('./ConexionBaseDeDatos');
let aplicacion = express();
let rutasAPI = require("./rutasApi")
aplicacion.use(bodyParser.urlencoded({
    extended: true
}));
aplicacion.use(bodyParser.json());
var puerto = process.env.PORT || 8080;
aplicacion.get('/', (solicitud, respuesta) => respuesta.send('Hello World with Express'));
aplicacion.use('/api', rutasAPI)
aplicacion.listen(puerto, function () {
    console.log("Running RestHub on port " + puerto);
});