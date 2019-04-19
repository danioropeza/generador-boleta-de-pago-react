var funciones_fecha = {
    contarDiasHabilesDeUnMesDesde(dia, fecha) {
        let cantidad_dias = this.calcularDiasDeUnMes(fecha.getMonth(), fecha.getFullYear());
        console.log(cantidad_dias);
        let cantidad_dias_habiles = 0;
        for (let i = dia; i <= cantidad_dias; i++) {
            if (!this.esDiaNoHabil(new Date(fecha.getFullYear(), fecha.getMonth(), i))) {
                cantidad_dias_habiles++;
            }
        }
        return cantidad_dias_habiles;
    },

    esSabado(fecha) {
        console.log(fecha.getDay(), fecha);
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

    calcularUltimoDiaHabilDelMes(fecha_actual) {
        let ultimoDia = new Date(fecha_actual.getFullYear(), fecha_actual.getMonth() + 1, 0);
        if (this.esSabado(ultimoDia))
            return ultimoDia.getDate() - 1;
        if (this.esDomingo(ultimoDia))
            return ultimoDia.getDate() - 2;
        return ultimoDia.getDate();
    }
}
module.exports=funciones_fecha;
//.exports = {contarDiasHabilesDeUnMesDesde, esViernes, esSabado,esDomingo,esSemanaPar,calcularDiasDeUnMes,calcularUltimoDiaHabilDelMes};


Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000        - 3 + (week1.getDay() + 6) % 7) / 7);
};
