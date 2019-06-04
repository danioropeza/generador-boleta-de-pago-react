class PresentadorObtenerEmpleados {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(this.noHayEmpleados(mensaje))
            return "No hay empleados";
        return this.prepararFormato(mensaje);
    }
    noHayEmpleados(listaDeEmpleados) {
        return listaDeEmpleados.length == 0;
    }
    prepararFormato(empleados) {
        var listaEmpleadosConFormato = []
        empleados.forEach((empleado) => {
            listaEmpleadosConFormato.push(this.prepararFormatoEmpleado(empleado));
        });
        return listaEmpleadosConFormato;
    }
    prepararFormatoEmpleado(empleado) {
        return {
            "nombre": empleado.nombre,
            "ci": empleado.ci,
            "salario": empleado.calculadora.salario,
            "montoPorHora": empleado.calculadora.montoPorHora,
            "comision": empleado.calculadora.porcentajeComision,
            "metodosDeNotificacion": empleado.metodosDeNotificacion,
            "salarioBase": empleado.calculadora.salarioBase,
            "fechaInicioLaboral": empleado.calculadora.fechaInicioTrabajo,
            "perteneceASindicato": empleado.perteneceASindicato?"SI":"NO",
        }
    }
   
}

module.exports = { PresentadorObtenerEmpleados }

