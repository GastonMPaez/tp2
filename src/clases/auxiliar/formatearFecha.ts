import moment from "moment";
import ValorNoEncontrado from "../../excepciones/error";

export default class ConvertirFecha{
    public convertirFecha(fechaNumerica: number){
        const fechaMoment = moment(fechaNumerica.toString(), "YYYYMMDD");
        if (fechaMoment.isValid()) {
            return fechaMoment;
        } else {
            throw new ValorNoEncontrado("Fecha Incorrecta");
        }
    }
}
//console.log(fechaMoment.format('DD/MM/YYYY'))
/*
necesito que imprima la fecha de las tareas con ese formato

convertirFecha cuando sea llamada obtiene el valor de tara.FechaVec

convertirFecha(tarea.getFechaVec());

fecha = 20240204

*/