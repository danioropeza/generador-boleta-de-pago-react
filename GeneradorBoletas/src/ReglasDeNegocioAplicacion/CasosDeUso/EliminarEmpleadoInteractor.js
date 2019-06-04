class EliminarEmpleadoInteractor {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    eliminarEmpleado(ci)
    {
        return this.repositorio.eliminarEmpleado(ci);
    }
}

module.exports = { EliminarEmpleadoInteractor: EliminarEmpleadoInteractor }