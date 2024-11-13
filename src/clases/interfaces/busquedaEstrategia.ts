import ListaTarea from "../../Listas/ListaTarea";
import Tarea from "../Tarea";
/**
 * @property 
 * interfaz de busqueda
 */
export interface BusquedaEstrategia {
    buscar(lista: ListaTarea, valor: any):Tarea;
}