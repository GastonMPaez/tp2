import { Prioridad } from "../../Enum/Prioridad";
import ValorNoEncontrado from "../../excepciones/error";
import Tarea from "../Tarea";

export default class CrearTarea{
    public crearNuevaTarea(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string):Tarea {
        if(!titulo){
            throw new ValorNoEncontrado("El titulo es obligatorio");
        }
        const nuevaTarea = new Tarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta);
        return nuevaTarea;
    }
}
/*
clase que crea una nueva tarea, si el titulo no se encuenta tira error
implementar correctamente el error y la explicacion de la funcion para la documentacion
*/