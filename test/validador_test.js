var expect = require("chai").expect;

const ValidadorSalarioPorHora = require("../src/logica/Validadores/ValidadorSalarioPorHora").ValidadorSalarioPorHora;
const ValidadorSalarioFijo = require("../src/logica/Validadores/ValidadorSalarioFijo").ValidadorSalarioFijo;
const ValidadorSalarioPorComision = require("../src/logica/Validadores/ValidadorSalarioPorComision").ValidadorSalarioPorComision;

describe(" Validadores", function() {
    it("deberia devolver false cuando al validador por hora (parcial) se le pasa una fecha que no coincide con el dia viernes", function() {
        let validador = new ValidadorSalarioPorHora();
        let fecha_actual = new Date("April 6 2019");
        expect(validador.esViernes(fecha_actual)).equal(false);
    });

    it("deberia devolver true cuando al validador por hora (parcial) se le pasa una fecha que coincide con el dia viernes", function() {
        let validador = new ValidadorSalarioPorHora();
        let fecha_actual = new Date("April 5 2019");
        expect(validador.esViernes(fecha_actual)).equal(true);
    });
    it("deberia devolver false cuando al validador por hora (parcial) se le pasa una fecha que no coincide con el dia viernes", function() {
        let validador = new ValidadorSalarioPorHora();
        let fecha_actual = new Date("April 6 2019");
        expect(validador.esViernes(fecha_actual)).equal(false);
    });

    it("deberia devolver 30 cuando obtengo el ultimo dia habil del mes de abril de 2019", function() {
        let validador = new ValidadorSalarioFijo();
        let fecha_actual = new Date("April 7 2019");
        expect(validador.calcularUltimoDiaHabilDelMes(fecha_actual)).equal(30);
    });

    it("deberia devolver false cuando quiero validar el pago del salario fijo en un dia diferente a fin de mes", function() {
        let validador = new ValidadorSalarioFijo();
        let fecha = new Date("April 7 2019");
        expect(validador.validadorSalarioFijo(fecha)).equal(false);
    });

    it("deberia devolver true cuando quiero validar el pago del salario fijo y es fin de mes", function() {
        let validador = new ValidadorSalarioFijo();
        let fecha = new Date("April 30 2019");
        expect(validador.validadorSalarioFijo(fecha)).equal(true);
    });

    it("deberia devolver true cuando quiero validar el pago del salario por comision un dia viernes", function() {
        let validador = new ValidadorSalarioPorComision();
        let fecha_actual = new Date("April 5 2019");
        expect(validador.esViernes(fecha_actual)).equal(true);
    });

    it("deberia devolver true cuando quiero validar el pago del salario por comision un dia viernes", function() {
        let validador = new ValidadorSalarioPorComision();
        let fecha_actual = new Date("April 5 2019");
        expect(validador.esViernes(fecha_actual)).equal(true);
    });
    it("deberia devolver true cuando quiero validar el pago del salario por comision un dia viernes y es semana par" , function() {
        let validador = new ValidadorSalarioPorComision();
        let fecha_actual = new Date("April 5 2019");
        expect(validador.validadorSalarioPorComision(fecha_actual)).equal(true);
    });

    it("deberia devolver true cuando quiero validar el pago del salario por comision un dia viernes y es semana par" , function() {
        let validador = new ValidadorSalarioPorComision();
        let fecha_actual = new Date("April 12 2019");
        expect(validador.validadorSalarioPorComision(fecha_actual)).equal(false);
    });
});