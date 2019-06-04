class GenerarEmpleadoJSONInteractor {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    generarJSON()
    {
        return this.repositorio.generarJSON();
    }
}

module.exports = { GenerarEmpleadoJSONInteractor: GenerarEmpleadoJSONInteractor }