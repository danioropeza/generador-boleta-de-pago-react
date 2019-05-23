class AsistenciaPorDia{
    constructor(fecha,horaEntrada,horaSalida){
        this.fecha=fecha;
        this.horaEntrada=horaEntrada;
        this.horaSalida=horaSalida;
    }
    calcularHorasTrabajadas(){
        let d1= new Date(this.fecha+"T"+this.horaEntrada+"Z");
        let d2= new Date(this.fecha+"T"+this.horaSalida+"Z");
        let horasTrabajadas= d2.getHours() - d1.getHours();
        if(this.sonMasDeOchoHoras(horasTrabajadas))
            horasTrabajadas = horasTrabajadas + this.calcularHorasExtra(horasTrabajadas);
        return horasTrabajadas;

    }
    sonMasDeOchoHoras(horasTrabajadas){
        return horasTrabajadas>8;
    }
    calcularHorasExtra(horasTrabajadas){
        return (horasTrabajadas-8)*0.5;
    }
}

module.exports= { AsistenciaPorDia };
