class ObtenerBoletasInteractor {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    obtenerBoletas()
    {
        return this.repositorio.obtenerBoletas();
    }
}

module.exports = { ObtenerBoletasInteractor: ObtenerBoletasInteractor }