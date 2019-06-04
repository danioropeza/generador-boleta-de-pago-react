var GeneradorBoletasDePago = require("../../ReglasDeNegocioEmpresa/GeneradorBoletas/GeneradorBoletasPago").GeneradorBoletasDePago;
class GenerarBoletasInteractor {
    constructor(repositorio, listaEmpleados) {
        this.repositorio = repositorio;
        this.listaEmpleados = listaEmpleados;
    }
    generarBoleta()
    {
        var generadorBoletasDePago = new GeneradorBoletasDePago(this.listaEmpleados);
        var listaDeBoletas = generadorBoletasDePago.generarBoletasDePagoParaTodosLosEmpleados();
        return  this.repositorio.generarBoleta(listaDeBoletas);
    }
}

module.exports = { GenerarBoletasInteractor: GenerarBoletasInteractor }