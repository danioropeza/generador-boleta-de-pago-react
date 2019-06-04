class  InterfazRepositorioBoleta{
    constructor(persitencia) {
        this.persitencia = persitencia;
    }
    generarBoleta(listaBoletas) {
        return this.persitencia.generarBoleta(listaBoletas);
    }
    obtenerBoletas() {
        return this.persitencia.obtenerBoletas();
    }
}
module.exports = { InterfazRepositorioBoleta };