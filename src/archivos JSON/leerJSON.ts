import { CustomFileClass } from "stdio";
import path from "path";
import ListaTarea from "../Listas/ListaTarea";
import Tarea from "../clases/Tarea";
import { iLeerJSON } from "./iLeerJSON";

/**
 * Clase `LeerArchivoJSON` se encarga de leer un archivo .json
*/

export class LeerArchivoJSON implements iLeerJSON{
    /** 
     * @returns {Tarea} - La lista de tareas incompletas con los valores leidos del .json.
     */
    public async listaTareasIncompleta(): Promise<ListaTarea>{
        let lista = new ListaTarea();
        let tarea:Tarea;

        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaIncompleta.json"), "r");
            

        for await(const line of file.readLine()) {
            const jsonString = line;
            const jsonObject = JSON.parse(jsonString);

            tarea = new Tarea(
                jsonObject.titulo,
                jsonObject.descripcion,
                jsonObject.fechaVec,
                jsonObject.categoria,
                jsonObject.etiqueta,
                jsonObject.prioridad,
            );
            lista.push(tarea);    
        }
        file.close();
        return lista;
    }

    /** 
     * @returns {Tarea} - La lista de tareas completas con los valores leidos del .json.
     */

    public async listaTareasCompleta(): Promise<ListaTarea>{
        let lista = new ListaTarea();
        let tarea:Tarea;

        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaCompleta.json"), "r");
            

        for await(const line of file.readLine()) {
            const jsonString = line;
            const jsonObject = JSON.parse(jsonString);

            tarea = new Tarea(
                jsonObject.titulo,
                jsonObject.descripcion,
                jsonObject.fechaVec,
                jsonObject.categoria,
                jsonObject.etiqueta,
                jsonObject.prioridad,
            );
            lista.push(tarea);    
        }
        file.close();
        return lista;
    }
}
