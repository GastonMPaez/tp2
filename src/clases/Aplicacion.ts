import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import Tarea from "./Tarea";

/**
 * Clase Aplicacion
 *
 * @class Aplicacion 
 * Esta clase es la principal de aplicacion, se encarga de gestionar las tareas 
 */
export default class Aplicacion{

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;

    private creador: CrearTarea;
    private editar: EditarTarea;


    constructor(){
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();

        this.creador = new CrearTarea();
        this.editar = new EditarTarea();
    }
    /**
     * @function CreadorT se encarga de crear las tareas
     * esta funcion develve una tarea
     * 
     */
    public creardorT(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string):Tarea{
        const nuevaTarea = this.creador.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta)
        return nuevaTarea;
    }
    /**
     * @function agregarNuevaTarea Se encarga de cargar las tareas a la lista
     * 
     */
    public agregarNuevaTarea(nuevaTarea:Tarea) {
        this.listaDeTareas.push(nuevaTarea);
    }
    /**
     * @function editarUnaTarea Se encarga de la edicion de las tareas.
     * el usuario llama a las distintas funciones de edicion que necesite para editar la tarea
     */
    
    public editarUnaTarea(tarea: Tarea){
        this.editar.editarAvance(this.listaDeTareas, tarea, 100);
    } 
    
    /**
    * @function eliminarUnaTarea Se encarga de la eliminacion de las tarea.
    * el usuario llama a la funcion
    */
    public eliminarUnaTarea(tarea: Tarea): Tarea{
        return this.listaDeTareas.delete(tarea);
    }
    /**
    * @function getListaDeTareasIncompletas 
    * esto devuelve la lista de tareas incompletas
    */
    public getListaDeTareasIncompletas(): ListaTarea {
        return this.listaDeTareas;
    }
    /**
    * @function getListaDeTareasCompletas 
    * esto devuelve la lista de tareas completas
    *
    */
    public getListaDeTareasCompletas(): ListaTarea {
        return this.listaDeTareasCompletadas;
    }
    /**
    * @function cargarTareasCompletas
    * se encarga de recorer la lista de tareas incompletas y pasar a la lista de tareas completas las tareas que tengan el valor avance 100
    *
    */ 
    public cargarTareasCompletas():void{
        let tarea:Tarea;
        let listaAux = this.listaDeTareas;
        let listaAux2 = new ListaTarea;


        while(listaAux.getHead()){
            tarea = listaAux.pop();
            if(tarea.getAvance() === 100){
                this.listaDeTareasCompletadas.insertOrdered(tarea);
            } else {
                listaAux2.insertOrdered(tarea);
            }
        }
        this.listaDeTareas = listaAux2;
        listaAux.clear();
        listaAux2.clear();
    }

    public buscadorFunc(lista: ListaTarea, valor: any):void{
        
    }

    public ordenarFunc(){
        
    }


}