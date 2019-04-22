var expect = require("chai").expect;
const AsistenciaDia = require("../src/logica/AsistenciaDia").AsistenciaDia;

describe("Asistencia por dia", function() {
    it("deberia obtener 1 hora de asistencia cuando registro una asistencia de 4 a 5.", function() {
        let asistencia= new AsistenciaDia(4,5,'tue mar 28 2009');
        expect(asistencia.calcularHoras()).equal(1);
    });
    it("deberia obtener 11 horas de asistencia cuando registro una asistencia de 1 a 11.", function() {
        let asistencia= new AsistenciaDia(1,11,'tue mar 28 2009');
        expect(asistencia.calcularHoras()).equal(11);
    });

});