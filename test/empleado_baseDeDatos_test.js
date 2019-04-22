var expect = require("chai").expect;
var mongoMock = require('mongo-mock');
var assert = require("chai").assert;

const Empleado = require("../src/logica/Empleado").Empleado;
const AssertionError = require("assert");

describe("Pruebas para la conexion de la base de datos y empleado", function () {
    var baseDeDatosTemporal = mongoMock.MongoClient;
    var urlBaseDeDatos = 'mongodb://localhost/resthub';
    var empleadoMario = {
        nombre: "Mario Palacios", ci: "8339221", salario: "7000", fecha_nacimiento: "tue mar 28 2009", 
        fecha_inicio: "tue mar 28 2009", tipo: "parcial", metodo_pago: "normal"
    } 

    it("Deberia crear correctamente un empleado con el nombre Mario Palacios", function (done) {   
        baseDeDatosTemporal.connect(urlBaseDeDatos, {}, function (error, baseDeDatos) {
            var coleccion = baseDeDatos.collection('empleados');
            var empleado = new Empleado(empleadoMario);
            coleccion.insertMany(empleado, function (error, resultado) {
                let empleadoResultado = resultado.ops[0];
                expect(empleado.nombre).eq(empleadoResultado.nombre);
                done();
            });
            baseDeDatos.close();
        });
    });

    it("Deberia devolver el empleado Mario Palacios cuando se lo requiera", function (done) {
        baseDeDatosTemporal.connect(urlBaseDeDatos, {}, function (error, baseDeDatos) {
            var coleccion = baseDeDatos.collection('empleados');
            var empleado = new Empleado(empleadoMario);
            coleccion.insertMany(empleado, function (err, resultadoInsert) {
                let empleadoResultado = resultadoInsert.ops[0];
                coleccion.find({ ci: empleadoResultado.ci }).toArray(function (err, resultadoFind) {
                    let empleadoEncontrado = resultadoFind[0];
                    expect(empleado.nombre).eq(empleadoEncontrado.nombre);
                    done();
                });

            });
            baseDeDatos.close();
        });
    });

});