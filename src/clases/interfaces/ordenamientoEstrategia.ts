import ListaTarea from "../../Listas/ListaTarea";
/**
 * @property 
 * interfaz de ordenamiento
 */
export interface OrdenamientoEstrategia {
    ordenar(lista: ListaTarea): void;
}