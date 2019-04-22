var expect = require("chai").expect;
var mongoMock = require('mongo-mock');
var assert = require("chai").assert;

const Empleado = require("../src/logica/Empleado").Empleado;
const AssertionError = require("assert");

describe("Pruebas para la conexion de la base de datos y empleado", function () {
    var baseDeDatosTemporal = mongoMock.MongoClient;
    var urlBaseDeDatos = 'mongodb://localhost/resthub';
    var empleadoMario = {
        nombre: "Mario Palacios", ci: "8339221", salario: "7000", fechaNacimiento: "tue mar 28 2009", 
        fechaInicio: "tue mar 28 2009", tipo: "Parcial", metodoPago: "normal"
    } 

    it("Deberia crear correctamente un empleado con el nombre Mario Palacios", function (done) {   
        baseDeDatosTemporal.connect(urlBaseDeDatos, {}, function (error, baseDeDatos) {
            var coleccionEmpleado = baseDeDatos.collection('empleados');
            var empleado = new Empleado(empleadoMario);
            coleccionEmpleado.insertMany(empleado, function (error, resultado) {
                let empleadoObtenido = resultado.ops[0];
                expect(empleado.nombre).eq(empleadoObtenido.nombre);
                expect(empleado.ci).eq(empleadoObtenido.ci);
                expect(empleado.salario).eq(empleadoObtenido.salario);
                expect(empleado.fechaNacimiento).eq(empleadoObtenido.fechaNacimiento);
                expect(empleado.fechaInicio).eq(empleadoObtenido.fechaInicio);
                expect(empleado.tipo).eq(empleadoObtenido.tipo);
                expect(empleado.metodoPago).eq(empleadoObtenido.metodoPago);
                done();
            });
            baseDeDatos.close();
        });
    });

    it("Deberia devolver el empleado Mario Palacios cuando se lo requiera", function (done) {
        baseDeDatosTemporal.connect(urlBaseDeDatos, {}, function (error, baseDeDatos) {
            var coleccionEmpleado = baseDeDatos.collection('empleados');
            var empleado = new Empleado(empleadoMario);
            coleccionEmpleado.insertMany(empleado, function (err, resultadoInsert) {
                let empleadoObtenido = resultadoInsert.ops[0];
                coleccionEmpleado.find({ ci: empleadoObtenido.ci }).toArray(function (err, resultadoFind) {
                    let empleadoEncontrado = resultadoFind[0];
                    expect(empleado.nombre).eq(empleadoObtenido.nombre);
                    expect(empleado.ci).eq(empleadoObtenido.ci);
                    expect(empleado.salario).eq(empleadoObtenido.salario);
                    expect(empleado.fechaNacimiento).eq(empleadoObtenido.fechaNacimiento);
                    expect(empleado.fechaInicio).eq(empleadoObtenido.fechaInicio);
                    expect(empleado.tipo).eq(empleadoObtenido.tipo);
                    expect(empleado.metodoPago).eq(empleadoObtenido.metodoPago);
                    done();
                });

            });
            baseDeDatos.close();
        });
    });

    it(`Deberia poder cambiar de tipo parcial a tipo comision dinamicamente para el empleado Mario`, function (done) {
            baseDeDatosTemporal.connect(urlBaseDeDatos, {}, function (error, baseDeDatos) {
                var coleccionEmpleado = baseDeDatos.collection('empleados');
                var empleado = new Empleado(empleadoMario);
                coleccionEmpleado.insertMany(empleado, function (err, resultadoInsert) {
                    let empleadoObtenido = resultadoInsert.ops[0];
                    coleccionEmpleado.updateOne({ ci: empleadoObtenido.ci }, { $set: { tipo: "Comision" } },
                        function (err, resultadoUpdate) {
                            coleccionEmpleado.find({ ci: empleadoObtenido.ci }).toArray(function (err, resultadoFind) {
                                let empleadoEncontrado = resultadoFind[0];
                                expect(empleado.nombre).eq(empleadoObtenido.nombre);
                                expect(empleado.ci).eq(empleadoObtenido.ci);
                                expect(empleado.salario).eq(empleadoObtenido.salario);
                                expect(empleado.fechaNacimiento).eq(empleadoObtenido.fechaNacimiento);
                                expect(empleado.fechaInicio).eq(empleadoObtenido.fechaInicio);
                                expect("Comision").eq(empleadoEncontrado.tipo);
                                expect(empleado.metodoPago).eq(empleadoObtenido.metodoPago);
                                done();
                            });
                        });

                });
                baseDeDatos.close();
            });
        });

    // it(`Deberia poder eliminar al empleado Mario la base de datos si se desea`, function (done) {
    //         baseDeDatosTemporal.connect(urlBaseDeDatos, {}, function (error, baseDeDatos) {
    //             var coleccionEmpleado = baseDeDatos.collection('empleados');
    //             var empleado = new Empleado(empleadoMario);
    //             coleccionEmpleado.insertMany(empleado, function (err, resultadoInsert) {
    //                 let empleadoObtenido = resultadoInsert.ops[0];
    //                 coleccionEmpleado.removeOne({ ci: empleadoObtenido.ci }, function (err, resultadoRemove) {
    //                     coleccionEmpleado.find({ ci: empleadoObtenido.ci }).toArray(function (err, resultadoFind) {
    //                         expect(resultadoFind.length).eq(0);
    //                         done();
    //                     });
    //                 });
    //             });
    //             baseDeDatos.close();
    //         });
    //     });

});