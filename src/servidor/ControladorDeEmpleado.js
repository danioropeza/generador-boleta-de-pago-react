Empleado = require('./ModeloDeEmpleado');
indice = function (solicitud, respuesta) {
    Empleado.get(function (error, empleados) {
        if (error) {
            respuesta.json({
                estado: "error",
                mensaje: error,
            });
        }
        respuesta.json({
            estado: "Correcto",
            mensaje: "Empleados extraidos correctamente",
            data: empleados
        });
    });
};
nuevo = function (solicitud, respuesta) {
    var empleado = new Empleado();
    var { nombre, ci, salario, fechaNacimiento, fechaInicio, tipo, metodoDePago } = solicitud.body; 
    empleado.nombre = nombre;
    empleado.ci = ci;
    empleado.salario = salario;
    empleado.fechaNacimiento = fechaNacimiento;
    empleado.fechaInicio = fechaInicio;
    empleado.tipo = tipo;
    empleado.metodoDePago = metodoDePago;
    empleado.save(function (error) {
         if (error)
             respuesta.json(error);
        respuesta.json({
            mensaje: 'Nuevo empleado creado',
            data: empleado
        });
    });
};
vista = function (solicitud, respuesta) {
    Empleado.findById(solicitud.params.empleado_id, function (error, empleado) {
        if (error)
            respuesta.send(error);
        respuesta.json({
            mensaje: 'Detalles de empleado cargando...',
            data: empleado
        });
    });
};
actualizacion = function (solicitud, respuesta) {
    var { nombre, ci, salario, fechaNacimiento, fechaInicio, tipo, metodoDePago } = solicitud.body; 
    Empleado.findById(solicitud.params.empleado_id, function (error, empleado) {
        if (error)
            respuesta.send(error);
        empleado.nombre = nombre;
        empleado.ci = ci;
        empleado.salario = salario;
        empleado.fechaNacimiento = fechaNacimiento;
        empleado.fechaInicio = fechaInicio;
        empleado.tipo = tipo;
        empleado.metodoDePago = metodoDePago;
        empleado.save(function (error) {
            if (error)
                respuesta.json(error);
            respuesta.json({
                mensaje: 'Informacion de empleado actualizada',
                data: empleado
            });
        });
    });
};
borrar = function (solicitud, respuesta) {
    Empleado.remove({
        _id: solicitud.params.empleado_id
    }, function (error, empleado) {
        if (error)
            respuesta.send(error);
        respuesta.json({
            estado: "Correcto",
            mensaje: 'empleado eliminado'
        });
    });
};
module.exports = { indice, nuevo, vista, actualizacion, borrar };