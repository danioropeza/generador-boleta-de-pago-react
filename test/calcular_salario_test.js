var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const DatosBoletaDePago = require("../src/logica/DatosBoletaDePago").DatosBoletaDePago;
const TarjetaAsistencia = require("../src/logica/TarjetaAsistencia").TarjetaAsistencia;
const TarjetaVentas = require("../src/logica/TarjetaVentas").TarjetaVentas;
const AsistenciaDia = require("../src/logica/AsistenciaDia").AsistenciaDia;
const Venta = require("../src/logica/Venta").Venta;


describe("Calcular salario", function() {
    let empleado_fijo = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
    });
    let empleado_hora = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        fecha_nacimiento: "tue mar 28 2009",
        tipo: "Parcial"});
    let empleado_comision = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        fecha_nacimiento: "tue mar 28 2009",
        tipo: "Comision"});

    it("deberia obtener como monto 6000 cuando se genere la boleta de pago para un empleado fijo con sueldo de 6000", function() {
        let datos_boleta_pago = new DatosBoletaDePago(empleado_fijo);
        expect(datos_boleta_pago.monto).equal(6000);
    });

    it("deberia obtener como monto 1000 cuando se genere la boleta de pago para un empleado que trabajo 5 horas cuyo salario por hora fue de 200bs", function() {
        let asistencia2= new AsistenciaDia(3,6,'tue mar 21 2009');
        let asistencia1= new AsistenciaDia(3,5,'tue mar 28 2009');

        let tarjeta_asistencia = new TarjetaAsistencia();
        tarjeta_asistencia.agregarAsistencia(asistencia1);
        tarjeta_asistencia.agregarAsistencia(asistencia2);

        empleado_hora.agregarTarjetaAsistencia(tarjeta_asistencia);

        let datos_boleta_pago = new DatosBoletaDePago(empleado_hora);
        expect(datos_boleta_pago.monto).equal(1000);
    });

    it("deberia obtener como comision 625 cuando se genera la boleta para un empleado que realizo una venta de 6250", function() {
        let venta = new Venta(6250,"Venta 1", 'tue mar 21 2009');
        let tarjeta_ventas= new TarjetaVentas();
        tarjeta_ventas.agregarVenta(venta);
        empleado_comision.agregarTarjetaVenta(tarjeta_ventas);
        let datos_boleta_pago = new DatosBoletaDePago(empleado_comision);
        expect(datos_boleta_pago.monto).equal(625);
    });


});