var fs = require('fs');

function cargarDatos(){
    var obj = JSON.parse(fs.readFileSync('../../FrameworksYDrivers/BaseDeDatos/JSON/boletas.json', 'utf8'));
    return obj;
}
class  PersistenciaBoletaJSON{ 
    constructor(persitencia) {
        this.persitencia = persitencia;
        this.listaBoletas = cargarDatos();
    }
    generarBoleta(listaBoletas) {
        this.listaBoletas = listaBoletas;
        return this.generarJSON();
    }
    generarJSON() {
        var listaBoletasJSON = JSON.stringify(this.listaBoletas);
        fs.writeFile('../../FrameworksYDrivers/BaseDeDatos/JSON/boletas.json', listaBoletasJSON, (error) => {
            if (error) throw error
        });
        return "Ok";
    }
    obtenerBoletas() {
        this.listaBoletas = cargarDatos();
        return this.listaBoletas;
    }
}
module.exports = { PersistenciaBoletaJSON };


