var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const CalcularSalarioFijo = require("../src/logica/Calculadoras/CalcularSalarioFijo").CalcularSalarioFijo;




describe("Pruebas para calcular salario fijo", function() {
    let empleadoFijo = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
        fechaInicio: new Date(2018, 2, 4, 12, 30, 0, 0)
    });

    let empleadoFijoDos = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
        fechaInicio: new Date(2019, 3, 4, 12, 30, 0, 0)
    });
    let empleadoFijoTres = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
        fechaInicio: new Date(2019, 3, 12, 12, 30, 0, 0)
    });

    it("deberia obtener true si el empleado ingreso este mes a trabajar", function() {
        let calcularSalarioFijo = new CalcularSalarioFijo(empleadoFijoDos);
        expect(calcularSalarioFijo.empezoATrabajarRecien()).equal(true);
    });

    it("deberia obtener 3545 como sueldo, si trabajae por 13 dias del mes de abril con un salario de 6000 mensual", function() {
        let calcularSalarioFijo = new CalcularSalarioFijo(empleadoFijoTres);
        expect(calcularSalarioFijo.obtenerSueldoDiasRestantesDelMes()).equal(3545);
    });

    it("deberia obtener como monto 6000 cuando se genere la boleta de pago para un empleado fijo con sueldo de 6000", function() {
        let calcularSalarioFijo = new CalcularSalarioFijo(empleadoFijo);
        expect(calcularSalarioFijo.calcularSalarioFijo()).equal(6000);
    });


});