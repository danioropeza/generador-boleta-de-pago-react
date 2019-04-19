var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const CalcularSalarioFijo = require("../src/logica/Calculadoras/CalcularSalarioFijo").CalcularSalarioFijo;




describe("Calcular salario fijo", function() {
    let empleado_fijo = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
        fecha_inicio: new Date(2018, 2, 4, 12, 30, 0, 0)
    });

    let empleado_fijo2 = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
        fecha_inicio: new Date(2019, 3, 4, 12, 30, 0, 0)
    });
    let empleado_fijo3 = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
        fecha_inicio: new Date(2019, 3, 12, 12, 30, 0, 0)
    });

    it("deberia obtener true si el empleado ingreso este mes a trabajar", function() {
        let calcular_salario_fijo = new CalcularSalarioFijo(empleado_fijo2);
        expect(calcular_salario_fijo.empezoATrabajarRecien()).equal(true);
    });



    it("deberia obtener 3545 como sueldo, si trabajae por 13 dias del mes de abril con un salario de 6000 mensual", function() {
        let calcular_salario_fijo = new CalcularSalarioFijo(empleado_fijo3);
        expect(calcular_salario_fijo.obtenerSueldoDiasRestantesDelMes()).equal(3545);
    });



    it("deberia obtener como monto 6000 cuando se genere la boleta de pago para un empleado fijo con sueldo de 6000", function() {
        let calcular_salario_fijo = new CalcularSalarioFijo(empleado_fijo);

        expect(calcular_salario_fijo.calcularSalarioFijo()).equal(6000);
    });


});