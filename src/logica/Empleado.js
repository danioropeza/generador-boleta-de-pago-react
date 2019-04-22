const TarjetaAsistencia = require("./TarjetaAsistencia").TarjetaAsistencia;
const TarjetaVentas = require("./TarjetaVentas").TarjetaVentas;

class Empleado {
    constructor(empleado) {
        this.nombre = empleado.nombre;
        this.ci = empleado.ci;
        this.salario = empleado.salario;
        this.fechaNacimiento = empleado.fechaNacimiento;
        this.fechaInicio = empleado.fechaInicio;
        this.tipo = empleado.tipo;
        this.horas = empleado.horas;
        this.comision = empleado.comision;
        this.tarjetaAsistencia = new TarjetaAsistencia();
        this.tarjetaVentas = new TarjetaVentas();
        this.metodoDePago = null;
    }
    agregarTarjetaAsistencia(tarjetaAsistencia){
        this.tarjetaAsistencia = tarjetaAsistencia;
    }
    agregarTarjetaVenta(tarjetaVentas){
        this.tarjetaVentas = tarjetaVentas;
    }
    elegirMetodoDePago(metodoDePago){
        this.metodoDePago = metodoDePago;
    }
}
module.exports = { Empleado };

