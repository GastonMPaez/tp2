import { Prioridad } from "../../Enum/Prioridad";
import ValorNoEncontrado from "../../excepciones/error";
import Tarea from "../Tarea";

/** * Clase `CrearTarea` que se encarga de crear una nueva tarea. */
export default class CrearTarea{
      /** * Crea una nueva tarea. 
    * @param {string} titulo - El título de la tarea. 
    * @param {string} descripcion - La descripción de la tarea. 
    * @param {number} fecha - La fecha de vencimiento de la tarea. 
    * @param {Prioridad} prioridad - La prioridad de la tarea. 
    * @param {string} categoria - La categoría de la tarea. 
    * @param {string} etiqueta - La etiqueta de la tarea. 
    * @returns {Tarea} - La nueva tarea creada. 
    * @throws {ValorNoEncontrado} - Si el título está vacío. */
    public crearNuevaTarea(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string):Tarea {
        if(!titulo){
            throw new ValorNoEncontrado("El titulo es obligatorio");
        }
        const nuevaTarea = new Tarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta);
        return nuevaTarea;
    }
}