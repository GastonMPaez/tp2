import ListaTarea from "../../../Listas/ListaTarea";
import { BusquedaEstrategia } from "../../interfaces/busquedaEstrategia";
import { objetoBusqueda } from "../../interfaces/objetoBusqueda";
import Tarea from "../../Tarea";

/** * Clase `BuscadorDeTarea` que se encarga de 
 * buscar tareas utilizando una estrategia específica. */
export default class BuscadorDeTarea {
    private estrategia: BusquedaEstrategia;
    
   /** * Crea una nueva instancia de `BuscadorDeTarea`. * 
     * @param {BusquedaEstrategia} estrategia - La estrategia de búsqueda 
     * que se utilizará. */
    constructor(estrategia: BusquedaEstrategia){
        this.estrategia = estrategia;
    }
    
    /** * Establece una nueva estrategia de búsqueda. * 
     * @param {BusquedaEstrategia} estrategia - La nueva estrategia de búsqueda. */
    public setEstrategia(estrategia: BusquedaEstrategia): void{
        this.estrategia = estrategia;
    }
    
  /** * Busca una tarea en una lista utilizando la estrategia definida. * 
     * @param {ListaTarea} lista - La lista de tareas en la que se realizará 
     * la búsqueda. * @param {*} valor - El valor utilizado para la búsqueda. * 
     * @returns {Tarea} - La tarea encontrada. */
    public buscar(lista:ListaTarea, valor:objetoBusqueda): Tarea{
        return this.estrategia.buscar(lista, valor);
    }
}