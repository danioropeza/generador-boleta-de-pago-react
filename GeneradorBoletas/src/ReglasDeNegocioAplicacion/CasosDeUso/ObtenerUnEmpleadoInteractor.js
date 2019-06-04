class ObtenerUnEmpleadoInteractor {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    obtenerUnEmpleado(ci)
    {
        return this.repositorio.obtenerUnEmpleado(ci);
    }
}

module.exports = { ObtenerUnEmpleadoInteractor: ObtenerUnEmpleadoInteractor }