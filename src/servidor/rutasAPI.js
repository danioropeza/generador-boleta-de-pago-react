
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
        .get(ControladorDeEmpleado.index)
        .post(ControladorDeEmpleado.new);
ruteador.route('/empleados/:empleado_id')
        .get(ControladorDeEmpleado.view)
        .patch(ControladorDeEmpleado.update)
        .put(ControladorDeEmpleado.update)
        .delete(ControladorDeEmpleado.delete);
module.exports = ruteador;