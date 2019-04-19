var expect = require("chai").expect;

var funciones_fecha  = require("../src/logica/FuncionesFecha");


describe(" Fechas", function() {
    it("deberia devolver false cuando se le pasa una fecha que no coincide con el dia viernes", function() {
        let fecha_actual = new Date("April 18 2019");
        expect(funciones_fecha.esViernes(fecha_actual)).equal(false);
    });

    it("deberia devolver true cuando  se le pasa una fecha que coincide con el dia viernes", function() {
        let fecha_actual = new Date("April 19 2019");
        expect(funciones_fecha.esViernes(fecha_actual)).equal(true);
    });

    it("deberia devolver true cuando  se le pasa una fecha que coincide con el dia sabado", function() {
        let fecha_actual = new Date("April 20 2019");
        expect(funciones_fecha.esSabado(fecha_actual)).equal(true);
    });

    it("deberia devolver true cuando  se le pasa una fecha que coincide con el dia domingo", function() {
        let fecha_actual = new Date("April 21 2019");
        expect(funciones_fecha.esDomingo(fecha_actual)).equal(true);
    });

    it("deberia obtener 21 dias si cuento los dias habiles del mes de marzo de 2019", function() {
        expect(funciones_fecha.contarDiasHabilesDeUnMesDesde(1,new Date(2019, 2, 4, 12, 30, 0, 0))).equal(21);
    });


    it("deberia devolver 30 cuando obtengo el ultimo dia habil del mes de abril de 2019", function() {
        let fecha_actual = new Date("April 7 2019");
        expect(funciones_fecha.calcularUltimoDiaHabilDelMes(fecha_actual)).equal(30);
    });





});