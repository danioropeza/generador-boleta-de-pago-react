class MetodoDePago {
    constructor(metodoDePago) {
        this.metodoDePago=metodoDePago;
    }
    obtenerFormaDePagar(){
        return this.metodoDePago;
    }
}
module.exports = { MetodoDePago };