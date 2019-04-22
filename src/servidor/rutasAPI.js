let ruteador = require('express').Router();
ruteador.get('/', function (solicitud, respuesta) {
    respuesta.json({
        estado: 'Api funcionando',
        mensaje: 'Bienvenido',
    });
});
var controladorDeEmpleado = require('./controladorDeEmpleado');
ruteador.route('/empleados')
        .get(controladorDeEmpleado.indice)
        .post(controladorDeEmpleado.nuevo);
ruteador.route('/empleados/:empleado_id')
        .get(controladorDeEmpleado.vista)
        .patch(controladorDeEmpleado.actualizacion)
        .put(controladorDeEmpleado.actualizacion)
        .delete(controladorDeEmpleado.borrar);
module.exports = ruteador;