class Venta {
     constructor(monto,descripcion,fecha) {
         this.monto = monto;
         this.descripcion = descripcion;
         this.fecha = fecha;
     }
    calcularComision(){
        return this.monto * 0.10 ;
    }
}
module.exports = { Venta };