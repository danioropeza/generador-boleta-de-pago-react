//import RepositorioEmpleado from './RepositorioEmpleado';
var ConexionMongoDB = require('./ConexionMongoDB').ConexionMongoDB;
var MongoClient = require('mongodb').MongoClient;

class PersistenciaEmpleadoMongoDB {
  constructor() {
    this.empleadoRepository = new ConexionMongoDB();
    this.baseDeDatos = this.empleadoRepository.mongoose;
  }
  insertarEmpleado(empleado) {
    this.baseDeDatos.connect(this.empleadoRepository.url, (err, baseDeDatos) => this.funcionInsertarEmpleado(err, baseDeDatos, empleado));
  }
  funcionInsertarEmpleado(err, baseDeDatos, empleado) {
      var db = baseDeDatos.db("BoletasDePago").collection("empleado");
      db.insertOne(empleado, function (err, res) {
        if (err) 
          throw err;
        console.log("1 documento insertado");
        db.close();
      });
  }

  buscarEmpleado(empleado) {
    this.baseDeDatos.connect(this.empleadoRepository.url, (err, baseDeDatos) => this.funcionBuscarEmpleado(err, baseDeDatos, empleado));
  }
  funcionBuscarEmpleado(err, baseDeDatos, empleado) {
      var db = baseDeDatos.db("BoletasDePago").collection("empleado");
      db.find({_id: empleado._id}).toArray(function (err, result) {
        if (err) 
          throw err;
        console.log(result);
        db.close();
      });
  }

  actualizarEmpleado(empleado, nuevosValores) {
    this.baseDeDatos.connect(this.empleadoRepository.url, (err, baseDeDatos) => this.funcionActualizarEmpleado(err, baseDeDatos, empleado, nuevosValores));
  }
  funcionActualizarEmpleado(err, baseDeDatos, empleado, nuevosValores) {
    var db = baseDeDatos.db("BoletasDePago").collection("empleado");
    db.updateOne({_id: empleado._id},{$set:nuevosValores} , function (err, res) {
      if (err) throw err;
      console.log("1 empleado actualizado");
      db.close();
    });
  }

  eliminarEmpleado(empleado) {
    this.baseDeDatos.connect(this.empleadoRepository.url, (err, baseDeDatos) => this.funcionEliminarEmpleado(err, baseDeDatos, empleado))
  }
  funcionEliminarEmpleado(err, baseDeDatos, empleado) {
    var db = baseDeDatos.db("BoletasDePago").collection("empleado");
    db.deleteOne({_id: empleado._id}, function (err, obj) {
        if (err) throw err;
        console.log("1 empleado eliminado");
        db.close();
      });
  }
  devolverTodosLosEmpleado(){
    let lista;
    let urlTemp = this.url;
    let mongooseTemp = this.mongoose;
    let promesa =  new Promise(
      function(resolve, reject){
        this.baseDeDatos.connect(this.empleadoRepository.url, (err, baseDeDatos) => this.funcionDevolverTodosLosEmpleado(err, baseDeDatos));
      }
    );
    return promesa;
  }
  funcionDevolverTodosLosEmpleado(err, baseDeDatos) {
    var db = baseDeDatos.db("BoletasDePago").collection("empleado");
    db.find({}).toArray(function(err, result){
        if (err) resolve(null);
        resolve(result);
        db.close();
      });
  }
}
module.exports = { PersistenciaEmpleadoMongoDB };

