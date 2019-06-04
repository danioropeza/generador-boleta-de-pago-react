class ObtenerEmpleadosInteractor {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    obtenerEmpleados()
    {
        return this.repositorio.obtenerEmpleados();
    }
}

module.exports = { ObtenerEmpleadosInteractor: ObtenerEmpleadosInteractor }