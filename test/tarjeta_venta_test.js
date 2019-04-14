var expect = require("chai").expect;

const TarjetaVentas= require("../src/logica/TarjetaVentas").TarjetaVentas;
const Venta= require("../src/logica/Venta").Venta;


describe("Tarjeta Venta", function() {

    it("deberia obtener como salario 0 para un empleado que no tiene ni una tarjeta de venta", function() {
        let tarjeta_ventas= new TarjetaVentas();

        expect(tarjeta_ventas.calcularComisionTotal()).equal(0);
    });
    it("deberia obtener como salario 650 para un empleado  tiene una tarjeta de venta con monto de 650", function() {
        let venta = new Venta(6250,"Venta 1", 'tue mar 21 2009');
        let tarjeta_ventas= new TarjetaVentas();
        tarjeta_ventas.agregarVenta(venta);
        expect(tarjeta_ventas.calcularComisionTotal()).equal(625);
    });


});