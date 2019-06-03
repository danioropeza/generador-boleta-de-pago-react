const ModeloDePeticionEmpleado = (requestBody) => {
    return ({
        "nombre": requestBody.nombre,
        "ci": requestBody.ci,
        "salario": requestBody.salario,
        "montoPorHora": requestBody.montoPorHora,
        "comision": requestBody.comision,
        "metodoDePago":  requestBody.metodoDePago,
        "metodosDeNotificacion": requestBody.metodosDeNotificacion,
        "salarioBase": requestBody.salarioBase,
        "tipo": requestBody.tipo,
        "fechaInicioLaboral": requestBody.fechaInicioLaboral,
        "perteneceASindicato": requestBody.perteneceASindicato,
    })
}
module.exports = { PeticionModeloEmpleado: ModeloDePeticionEmpleado }