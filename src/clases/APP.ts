import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";

export default class Aplicacion{

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;

    constructor(){
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();
    }
    
    //por ahora opcion para crear tareas, reveer con Ale 
    public agregarNuevaTarea(titulo:string, descripcion:string, fecha:Date, prioridad:Prioridad, categoria:string, etiqueta:string, avance:number) {
        const nuevaTarea = CrearTarea.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta, avance);
        this.listaDeTareas.push(nuevaTarea);
    }

    public editarUnaTarea(){
        EditarTarea

    }



}
