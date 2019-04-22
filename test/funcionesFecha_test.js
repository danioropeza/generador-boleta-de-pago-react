var expect = require("chai").expect;

var funcionesFecha  = require("../src/logica/FuncionesFecha");


describe("Pruebas para funciones fecha", function() {
    it("deberia devolver false cuando se le pasa una fecha que no coincide con el dia viernes", function() {
        let fechaActual = new Date("April 18 2019");
        expect(funcionesFecha.esViernes(fechaActual)).equal(false);
    });

    it("deberia devolver true cuando  se le pasa una fecha que coincide con el dia viernes", function() {
        let fechaActual = new Date("April 19 2019");
        expect(funcionesFecha.esViernes(fechaActual)).equal(true);
    });

    it("deberia devolver true cuando  se le pasa una fecha que coincide con el dia sabado", function() {
        let fechaActual = new Date("April 20 2019");
        expect(funcionesFecha.esSabado(fechaActual)).equal(true);
    });

    it("deberia devolver true cuando  se le pasa una fecha que coincide con el dia domingo", function() {
        let fechaActual = new Date("April 21 2019");
        expect(funcionesFecha.esDomingo(fechaActual)).equal(true);
    });

    it("deberia obtener 21 dias si cuento los dias habiles del mes de marzo de 2019", function() {
        expect(funcionesFecha.contarDiasHabilesDeUnMesDesde(1,new Date(2019, 2, 4, 12, 30, 0, 0))).equal(21);
    });


    it("deberia devolver 30 cuando obtengo el ultimo dia habil del mes de abril de 2019", function() {
        let fechaActual = new Date("April 7 2019");
        expect(funcionesFecha.calcularUltimoDiaHabilDelMes(fechaActual)).equal(30);
    });

    it("deberia devolver 29 cuando obtengo el ultimo dia habil del mes de marzo de 2019", function() {
        let fechaActual = new Date("March 7 2019");
        expect(funcionesFecha.calcularUltimoDiaHabilDelMes(fechaActual)).equal(29);
    });
    it("deberia devolver 30 cuando obtengo el ultimo dia habil del mes de agosto de 2019", function() {
        let fechaActual = new Date("August 7 2019");
        expect(funcionesFecha.calcularUltimoDiaHabilDelMes(fechaActual)).equal(30);
    });



});