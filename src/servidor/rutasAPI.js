
let ruteador = require('express').Router();
ruteador.get('/', function (solicitud, respuesta) {
    respuesta.json({
        estado: 'API esta funcionando',
        mensaje: 'Bienvenido',
    });
});
// Import contact controller
var ControladorDeEmpleado = require('./ControladorDeEmpleado');
// Contact routes
ruteador.route('/empleados')
        .get(ControladorDeEmpleado.indice)
        .post(ControladorDeEmpleado.nuevo);
ruteador.route('/empleados/:empleado_id')
        .get(ControladorDeEmpleado.vista)
        .patch(ControladorDeEmpleado.actualizacion)
        .put(ControladorDeEmpleado.actualizacion)
        .delete(ControladorDeEmpleado.borrar);
module.exports = ruteador;