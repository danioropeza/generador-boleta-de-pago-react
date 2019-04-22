var expect = require("chai").expect;
const  Venta = require("../src/logica/Venta").Venta;


describe(" Venta", function() {
    it("deberia obtener como salario 650 para un empleado  tiene una tarjeta de venta con monto de 650", function() {
        let venta = new Venta(700,"Venta 1", 'tue mar 21 2009');
        expect(venta.calcularComision()).equal(70);
    });

});