var expect = require('chai').expect
const AsistenciaPorDia = require('../src/tarjetas/AsistenciaPorDia').AsistenciaPorDia;

describe('',function(){
    it('calcular cantidad de horas de trabajo de una Tarjeta de hora con menos de 8 horas trabajadas', function () {
        let tarjetaHora = new AsistenciaPorDia("2018-03-22", "08:00:00", "14:00:00");
        expect(tarjetaHora.calcularHorasTrabajadas()).equal(6);
    });

    it('calcular cantidad de horas de trabajo de una Tarjeta de hora con menos de 8 horas trabajadas', function () {
        let tarjetaHora = new AsistenciaPorDia("2018-03-22", "08:00:00", "18:00:00");
        expect(tarjetaHora.calcularHorasTrabajadas()).equal(11);
    });

});