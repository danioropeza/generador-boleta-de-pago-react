var mongoose = require('mongoose');
var esquemaEmpleado = mongoose.Schema({
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
    fechaNacimiento: {
        type: String,
        required: true
    },
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
    
});
// Export Contact model
var Empleado = module.exports = mongoose.model('empleado', esquemaEmpleado);
module.exports.get = function (llamada, limite) {
    Empleado.find(llamada).limit(limite);
}