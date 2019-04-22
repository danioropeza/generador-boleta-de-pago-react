const TarjetaAsistencia = require("./TarjetaAsistencia").TarjetaAsistencia;
const TarjetaVentas = require("./TarjetaVentas").TarjetaVentas;

class Empleado {
    constructor(empleado) {
        this.nombre = empleado.nombre;
        this.ci = empleado.ci;
        this.salario = empleado.salario;
        this.fecha_nacimiento = empleado.fecha_nacimiento;
        this.fecha_inicio = empleado.fecha_inicio;
        this.tipo = empleado.tipo;
        this.horas = empleado.horas;
        this.comision = empleado.comision;
        this.tarjeta_asistencia = new TarjetaAsistencia();
        this.tarjeta_ventas = new TarjetaVentas();
        this.metodo_pago = null;
    }
    agregarTarjetaAsistencia(tarjeta_asistencia){
        this.tarjeta_asistencia=tarjeta_asistencia;
    }
    agregarTarjetaVenta(tarjeta_ventas){
        this.tarjeta_ventas=tarjeta_ventas;
    }
    elegirMetodoPago(metodo_pago){
        this.metodo_pago=metodo_pago;
    }
}
module.exports = { Empleado };

