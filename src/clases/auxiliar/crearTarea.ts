import { Prioridad } from "../../Enum/Prioridad";
import Tarea from "../Tarea";

export default class CrearTarea{
    public static crearNuevaTarea(titulo:string, descripcion:string, fecha:Date, prioridad:Prioridad, categoria:string, etiqueta:string, avance:number):Tarea {
        if(!titulo){
            throw new Error("El titulo es obligatorio");
        }
        const nuevaTarea = new Tarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta, avance);
        return nuevaTarea;
    }
}
/*
clase que crea una nueva tarea, si el titulo no se encuenta tira error
implementar correctamente el error y la explicacion de la funcion para la documentacion
*/