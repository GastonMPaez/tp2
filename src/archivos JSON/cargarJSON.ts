import { CustomFileClass } from "stdio";
import path from "path";
import Tarea from "../clases/Tarea";
/**
 * Clase `CargarArchivoJSON` se encarga de cargar una tarea a un archivo .json
*/
export default class CargarArchivoJSON{



    /** Carga una tarea incompleta a un archivo .json
     * @param {Tarea} tarea - La tarea que se va a escribir en un .json
     */
    public cargarListaIncompleta(tarea: Tarea) {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaIncompleta.json"), "a"); //apend -> agregar
        file.writeToFile(JSON.stringify(tarea));
        file.close();
    }

    /** Carga una tarea completa a un archivo .json
     * @param {Tarea} tarea - La tarea que se va a escribir en un .json
     */

    public cargarListaCompleta(tarea: Tarea){
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaCompleta.json"), "a");
        file.writeToFile(JSON.stringify(tarea));
        file.close();    
    }
}