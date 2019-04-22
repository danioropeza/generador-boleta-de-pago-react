var expect = require("chai").expect;

const TarjetaAsistencia = require("../src/logica/TarjetaAsistencia").TarjetaAsistencia;
const AsistenciaDia = require("../src/logica/AsistenciaDia").AsistenciaDia;


describe("Tarjeta asistencia", function() {

    it("deberia obtener como salario del empleado 0 cuando tengo un empleado sin ni una tarjeta de asistencia ", function() {
        let tarjetaAsistencia = new TarjetaAsistencia();
        expect(tarjetaAsistencia.calcularHorasTrabajadas()).equal(0);
    });

    it("deberia obtener 5 horas de trabajo.", function() {

        let asistenciaUno= new AsistenciaDia(4,5,'tue mar 28 2009');
        let asistenciaDos= new AsistenciaDia(3,5,'tue mar 21 2009');
        let asistenciaTres= new AsistenciaDia(3,5,'tue mar 14 2009');
        let tarjetaAsistencia= new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistenciaUno);
        tarjetaAsistencia.agregarAsistencia(asistenciaDos);
        tarjetaAsistencia.agregarAsistencia(asistenciaTres);

        expect(tarjetaAsistencia.calcularHorasTrabajadas()).equal(5);
    });
});