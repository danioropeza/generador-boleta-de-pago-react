class TarjetaVentas {
    constructor() {
        this.ventas= [];
    }
    agregarVenta(venta){
        this.ventas.push(venta);
    }
    calcularComisionTotal(){
        let comision = 0;
        for(let i = 0; i < this.ventas.length; i++){
            comision += this.ventas[i].calcularComision();
        }
        return comision;
    }
}
module.exports = { TarjetaVentas };