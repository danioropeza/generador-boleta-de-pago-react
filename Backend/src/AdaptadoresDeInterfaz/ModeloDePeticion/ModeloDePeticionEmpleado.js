const ModeloDePeticionEmpleado = (requestBody) => {
    return ({
        "nombre": requestBody.nombre,
        "ci": requestBody.ci,
        "salario": "8000",
        "montoPorHora": "10",
        "comision": "120",
        "metodoDePago":  "cheque",
        "metodosDeNotificacion": ["Whatsapp"],
        "salarioBase": "2000",
        "tipo": "Fijo",
        "fechaInicioLaboral": "21/02/2019",
    })
}
module.exports = { PeticionModeloEmpleado: ModeloDePeticionEmpleado }