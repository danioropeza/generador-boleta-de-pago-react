var nodemailer = require('nodemailer');
class Email {
    constructor(empleado) {
        this.empleado=empleado;


    }
    notificar(){
        return this.empleado.notificar() + " Email ";
    }
}
module.exports = { Email };