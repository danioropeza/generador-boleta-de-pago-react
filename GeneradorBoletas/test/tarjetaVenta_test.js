var expect = require('chai').expect
var TarjetaVenta = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/TarjetaVenta').TarjetaVenta;

describe('',function(){
    it('calcular monto vendido de una Tarjeta de venta', function () {
        let tarjetaVenta = new TarjetaVenta(600, "2018-03-22");
        expect(tarjetaVenta.obtenerMontoVendido()).equal(600);
    });
});