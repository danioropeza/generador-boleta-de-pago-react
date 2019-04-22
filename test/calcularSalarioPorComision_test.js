var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const CalcularSalarioPorComision = require("../src/logica/Calculadoras/CalcularSalarioPorComision").CalcularSalarioPorComision;
const TarjetaVentas = require("../src/logica/TarjetaVentas").TarjetaVentas;
const Venta = require("../src/logica/Venta").Venta;



describe("Pruebas para calcular salario comision", function() {
    let empleadoComision = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        fechaNacimiento: "tue mar 28 2009",
        tipo: "Comision"
    });

    it("deberia obtener como comision 0 cuando se genera la boleta para un empleado que no realizo ventas", function() {
        let calculadoraComision = new CalcularSalarioPorComision(empleadoComision);
        expect(calculadoraComision.calcularSalarioPorComision()).equal(0);
    });
    it("deberia obtener como comision 625 cuando se genera la boleta para un empleado que realizo una venta de 6250", function() {
        let venta = new Venta(6250,"Venta 1", 'tue mar 21 2009');
        let tarjetaVentas= new TarjetaVentas();
        tarjetaVentas.agregarVenta(venta);
        empleadoComision.agregarTarjetaVenta(tarjetaVentas);
        let calculadoraComision = new CalcularSalarioPorComision(empleadoComision);
        expect(calculadoraComision.calcularSalarioPorComision()).equal(625);
    });
});