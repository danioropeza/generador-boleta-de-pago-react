var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const CalcularSalarioPorComision = require("../src/logica/Calculadoras/CalcularSalarioPorComision").CalcularSalarioPorComision;
const TarjetaVentas = require("../src/logica/TarjetaVentas").TarjetaVentas;
const Venta = require("../src/logica/Venta").Venta;



describe("Calcular salario comision", function() {
    let empleado_comision = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        fecha_nacimiento: "tue mar 28 2009",
        tipo: "Comision"
    });

    it("deberia obtener como comision 0 cuando se genera la boleta para un empleado que no realizo ventas", function() {

        let calculadora_comision = new CalcularSalarioPorComision(empleado_comision);
        expect(calculadora_comision.calcularSalarioPorComision()).equal(0);
    });
    it("deberia obtener como comision 625 cuando se genera la boleta para un empleado que realizo una venta de 6250", function() {
        let venta = new Venta(6250,"Venta 1", 'tue mar 21 2009');
        let tarjeta_ventas= new TarjetaVentas();
        tarjeta_ventas.agregarVenta(venta);
        empleado_comision.agregarTarjetaVenta(tarjeta_ventas);
        let calculadora_comision = new CalcularSalarioPorComision(empleado_comision);
        expect(calculadora_comision.calcularSalarioPorComision()).equal(625);
    });


});