var ConexionMongoDB = require('./ConexionMongoDB').ConexionMongoDB;
var MongoClient = require('mongodb').MongoClient;

class PersistenciaEmpleadoMongoDB {
  constructor() {
    this.empleadoRepository = new ConexionMongoDB();
    this.baseDeDatos = this.empleadoRepository.mongoose;
  }
  realizarConexion(empleado, servicio, nuevosValores) {
    this.baseDeDatos.connect(this.empleadoRepository.url, (err, baseDeDatos) => { 
        baseDeDatos = this.configurarBaseDeDatos(err, baseDeDatos);
         servicio(baseDeDatos, empleado, nuevosValores);
      });
  }
  configurarBaseDeDatos(err, baseDeDatos) {
    return baseDeDatos.db("BoletasDePago").collection("empleado");
  }
  insertarEmpleado(empleado) {
    this.realizarConexion(empleado, this.insertOne, "");
  }
  buscarEmpleado(empleado) {
    this.realizarConexion(empleado, this.find, "");
  }
  actualizarEmpleado(empleado, nuevosValores) {
    this.realizarConexion(empleado, this.insertOne, nuevosValores);
  }
  eliminarEmpleado(empleado) {
    this.realizarConexion(empleado, this.deleteOne, "");
  }
  devolverTodosLosEmpleado(){
    this.realizarConexion(empleado, this.findAll, "");
  }
  insertOne(baseDeDatos, empleado) {
    baseDeDatos.insertOne(empleado, function (err, res) {
      console.log("1 documento insertado");
      res = "1 documento insertado";
      //baseDeDatos.close();
    });
  }
  find(baseDeDatos, empleado) {
    baseDeDatos.find({_id: empleado._id}).toArray(function (err, result) {
      if (err) 
        throw err;
      console.log(result);
      baseDeDatos.close();
    });
  }
  updateOne(baseDeDatos,empleado, nuevosValores) {
    baseDeDatos.updateOne({_id: empleado._id},{$set:nuevosValores} , function (err, res) {
      if (err) throw err;
      baseDeDatos.close();
      return "1 Empleado actualizado";
    });
  }
  deleteOne(baseDeDatos, empleado) {
    baseDeDatos.deleteOne({_id: empleado._id}, function (err, obj) {
      if (err) throw err;
      console.log("1 Empleado eliminado");
      baseDeDatos.close();
    });
  }
  findAll(baseDeDatos, empleado) {
    baseDeDatos.find({}).toArray(function(err, result){
      if (err) resolve(null);
      //resolve(result);
      //falta
      baseDeDatos.close();
    });
  }
}
module.exports = { PersistenciaEmpleadoMongoDB };

