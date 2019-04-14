var expect = require("chai").expect;

const TarjetaAsistencia = require("../src/logica/TarjetaAsistencia").TarjetaAsistencia;
const AsistenciaDia = require("../src/logica/AsistenciaDia").AsistenciaDia;


describe("Tarjeta asistencia", function() {

    it("deberia obtener como salario del empleado 0 cuando tengo un empleado sin ni una tarjeta de asistencia ", function() {
        let tarjeta_asistencia = new TarjetaAsistencia();
        expect(tarjeta_asistencia.calcularHorasTrabajadas()).equal(0);
    });


    it("deberia obtener 5 horas de trabajo.", function() {

        let asistencia1= new AsistenciaDia(4,5,'tue mar 28 2009');
        let asistencia2= new AsistenciaDia(3,5,'tue mar 21 2009');
        let asistencia3= new AsistenciaDia(3,5,'tue mar 14 2009');
        let tarjeta_asistencia= new TarjetaAsistencia();
        tarjeta_asistencia.agregarAsistencia(asistencia1);
        tarjeta_asistencia.agregarAsistencia(asistencia2);
        tarjeta_asistencia.agregarAsistencia(asistencia3);

        expect(tarjeta_asistencia.calcularHorasTrabajadas()).equal(5);
    });

});