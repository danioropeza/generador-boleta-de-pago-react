var mongoose = require('mongoose');
var empleadoEsquema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ci: {
        type: String,
        required: true
    },
    salario: {
        type: String,
        required: true
    },
    fechaNacimiento: String,
    fechaInicio: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    metodoDePago: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
var Empleado = module.exports = mongoose.model('empleado', empleadoEsquema);
module.exports.get = function (llamada, limite) {
    Empleado.find(llamada).limit(limite);
}