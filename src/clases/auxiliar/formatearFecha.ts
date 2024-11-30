import moment from "moment";
import ValorNoEncontrado from "../../excepciones/error";

/**
 * Clase `ConvertirFecha` que se encarga de convertir una fecha numérica en un objeto de fecha.
 */
export default class ConvertirFecha {

    /**
     * Convierte una fecha numérica en un objeto de fecha.
     * @param {number} fechaNumerica - La fecha en formato numérico (YYYYMMDD).
     * @returns {moment.Moment} - El objeto de fecha convertido.
     * @throws {ValorNoEncontrado} - Si la fecha es incorrecta.
     */
    public convertirFecha(fechaNumerica: number): moment.Moment {
        const fechaMoment = moment(fechaNumerica.toString(), "YYYYMMDD");
        if (fechaMoment.isValid()) {
            return fechaMoment;
        } else {
            throw new ValorNoEncontrado("Fecha Incorrecta");
        }
    }
}
