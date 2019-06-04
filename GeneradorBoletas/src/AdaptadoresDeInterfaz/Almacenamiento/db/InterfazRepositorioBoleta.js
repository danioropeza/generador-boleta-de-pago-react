class  InterfazRepositorioBoleta{
    constructor(persitencia) {
        this.persitencia = persitencia;
    }
    generarBoleta(listaBoletas) {
        return this.persitencia.generarBoleta(listaBoletas);
    }
}
module.exports = { InterfazRepositorioBoleta };