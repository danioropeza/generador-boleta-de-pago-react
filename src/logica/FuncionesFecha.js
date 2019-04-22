var funcionesFecha = {
    contarDiasHabilesDeUnMesDesde(dia, fecha) {
        let cantidadDias = this.calcularDiasDeUnMes(fecha.getMonth(), fecha.getFullYear());
        let cantidadDiasHabiles = 0;
        for (let i = dia; i <= cantidadDias; i++) {
            if (!this.esDiaNoHabil(new Date(fecha.getFullYear(), fecha.getMonth(), i))) {
                cantidadDiasHabiles++;
            }
        }
        return cantidadDiasHabiles;
    },

    esSabado(fecha) {
        return fecha.getDay() === 6;
    },
    esDomingo(fecha) {
        return fecha.getDay() === 0;
    },

    esViernes(fecha) {
        return fecha.getDay() === 5;
    },

    esSemanaPar(fecha) {
        return new Date(fecha).getWeek() % 2 === 0;
    },
    esDiaNoHabil(fecha) {
        return this.esDomingo(fecha) || this.esSabado(fecha);
    },
    calcularDiasDeUnMes(mes, anio) {
        return new Date(anio, mes + 1, 0).getDate();
    },

    calcularUltimoDiaHabilDelMes(fechaActual) {
        let ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
        if (this.esSabado(ultimoDia))
            return ultimoDia.getDate() - 1;
        if (this.esDomingo(ultimoDia))
            return ultimoDia.getDate() - 2;
        return ultimoDia.getDate();
    }
}
module.exports=funcionesFecha;

Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};
