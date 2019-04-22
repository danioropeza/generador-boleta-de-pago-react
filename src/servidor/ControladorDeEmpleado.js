Empleado = require('./modeloEmpleado');
indice = function (solicitud, respuesta) {
    Empleado.get(function (error, empleados) {
        if (error) {
            respuesta.json({
                estado: "error",
                mensaje: error,
            });
        }
        respuesta.json({
            estado: "correcto",
            mensaje: "Se cargaron los empleados exitosamente",
            data: empleados
        });
    });
};
nuevo = function (solicitud, respuesta) {
    var empleado = new Empleado();
    empleado.nombre = solicitud.body.nombre;
    empleado.ci = solicitud.body.ci;
    empleado.salario = solicitud.body.salario;
    empleado.fechaNacimiento = solicitud.body.fechaNacimiento;
    empleado.fechaInicio = solicitud.body.fechaInicio;
    empleado.tipo = solicitud.body.tipo;
    empleado.metodoDePago = solicitud.body.metodoDePago
    empleado.save(function (error) {
         if (error)
             respuesta.json(error);
    respuesta.json({
            mensaje: 'Nuevo empleado creado!',
            data: empleado
        });
    });
};
vista = function (solicitud, respuesta) {
    Empleado.findById(solicitud.params.contact_id, function (error, empleado) {
        if (error)
            respuesta.send(error);
        respuesta.json({
            mensaje: 'Detalles de empleado cargando..',
            data: empleado
        });
    });
};
actualizacion = function (solicitud, respuesta) {
    Empleado.findById(solicitud.params.contact_id, function (error, empleado) {
        if (error)
            respuesta.send(error);
        empleado.nombre = solicitud.body.nombre;
        empleado.ci = solicitud.body.ci;
        empleado.salario = solicitud.body.salario;
        empleado.fechaNacimiento = solicitud.body.fechaNacimiento;
        empleado.fechaInicio = solicitud.body.fechaInicio;
        empleado.tipo = solicitud.body.tipo;
        empleado.metodoDePago = solicitud.body.metodoDePago
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
        _id: solicitud.params.contact_id
    }, function (error, empleado) {
        if (error)
            respuesta.send(error);
    respuesta.json({
            estado: "Correcto",
            mensaje: 'Empleado eliminado'
        });
    });
};

module.exports = { indice, nuevo, vista, actualizacion, borrar };