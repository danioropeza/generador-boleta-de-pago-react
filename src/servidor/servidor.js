let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let aplicacion = express();
let rutasAPI = require("./rutasAPI")

aplicacion.use(bodyParser.urlencoded({
    extended: true
}));
aplicacion.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub');
var baseDeDatos = mongoose.connection;
var puerto = process.env.PORT || 8080;
aplicacion.get('/', (solicitud, respuesta) => respuesta.send('Hola mundo'));
aplicacion.use('/api', rutasAPI)
aplicacion.listen(puerto, function () {
    console.log("Rest funcionando en el puerto" + puerto);
});