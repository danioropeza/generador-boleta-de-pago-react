const ModeloDeRespuestaEmpleado = (empleado) => {
    return ({
        "nombre": empleado.nombre,
        "ci": empleado.ci,
        "salario": empleado.salario,
        "montoPorHora": empleado.montoPorHora,
        "comision": empleado.comision,
        "metodoDePago":  empleado.metodoDePago,
        "metodosDeNotificacion": empleado.metodosDeNotificacion,
        "salarioBase": empleado.salarioBase,
        "tipo": empleado.tipo,
        "fechaInicioLaboral": empleado.fechaInicioLaboral,
        "perteneceASindicato": empleado.perteneceASindicato,
    })
}
module.exports = { ModeloDeRespuestaEmpleado }