class ValidadorSalarioPorHora {
    constructor() {
        this.validador = this.validadorSalarioPorHora.bind(this);
    }
    validadorSalarioPorHora(fechaActual) {
        return this.esViernes(fechaActual);
    }

    esViernes(fecha){
        return new Date(fecha).getDay()==5;
    }

}
module.exports = { ValidadorSalarioPorHora };