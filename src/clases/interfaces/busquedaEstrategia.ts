import ListaTarea from "../../Listas/ListaTarea";
import Tarea from "../Tarea";
import { objetoBusqueda } from "./objetoBusqueda";
/**
 * @property 
 * interfaz de busqueda
 */
export interface BusquedaEstrategia {
    buscar(lista: ListaTarea, valor: objetoBusqueda):Tarea;
}