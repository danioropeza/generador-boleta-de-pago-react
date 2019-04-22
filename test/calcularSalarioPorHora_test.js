var expect = require("chai").expect;


const Empleado = require("../src/logica/Empleado").Empleado;
const CalcularSalarioPorHora = require("../src/logica/Calculadoras/CalcularSalarioPorHora").CalcularSalarioPorHora;
const TarjetaAsistencia = require("../src/logica/TarjetaAsistencia").TarjetaAsistencia;
const AsistenciaDia = require("../src/logica/AsistenciaDia").AsistenciaDia;



describe("Pruebas para calcular salario hora", function() {

    let empleadoHora = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        fechaNacimiento: "tue mar 28 2009",
        tipo: "Parcial"});

    it("deberia obtener como monto 1000 cuando se genere la boleta de pago para un empleado que trabajo 5 horas cuyo salario por hora fue de 200bs", function() {
        let asistenciaDos= new AsistenciaDia(3,6,'tue mar 21 2009');
        let asistenciaUno= new AsistenciaDia(3,5,'tue mar 28 2009');

        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistenciaUno);
        tarjetaAsistencia.agregarAsistencia(asistenciaDos);

        empleadoHora.agregarTarjetaAsistencia(tarjetaAsistencia);

        let calculadoraHora = new CalcularSalarioPorHora(empleadoHora);
        expect(calculadoraHora.calcularSalarioPorHora()).equal(1000);
    });



});