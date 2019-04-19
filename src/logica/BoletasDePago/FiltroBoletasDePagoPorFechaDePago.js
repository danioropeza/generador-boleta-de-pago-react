function filtroBoletasDePagoPorFechaDePago(listaBoletasDePago){
    let lista_filtrada = [];
    listaBoletasDePago.forEach(datosBoletaDePago => {
        if(datosBoletaDePago.validador(datosBoletaDePago.fecha_pago)){
            lista_filtrada.push(datosBoletaDePago);
        }
    });
    return lista_filtrada;
}
module.exports = filtroBoletasDePagoPorFechaDePago;