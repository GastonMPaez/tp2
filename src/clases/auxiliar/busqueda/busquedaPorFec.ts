import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import { objetoBusqueda } from "../../interfaces/objetoBusqueda";
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";
import ValorNoEncontrado from "../../../excepciones/error";

/** * Clase `BusquedaPorFecha` que se encarga de 
 * buscar tareas dado un fecha pasada por parametro. */
export default class BusquedaPorFecha implements BusquedaEstrategia {
     /** * Crea una nueva instancia de `BuscadorDeTarea`. * 
     * @param {ListaTarea} lista - La lista donde vamos a realizar una busqueda 
     * @param {objetoBusqueda} valor - El valor por el cual se va a hacer la busqueda 
     * @returns {Tarea} - la tarea encontrada*/
    public buscar(lista: ListaTarea, valor: objetoBusqueda):Tarea {
        
        let aux = lista.getHead();
        
        while(aux !== undefined && aux.value.getFechaVec() != valor.fecha){
            aux = aux.next;
        }
        
        if (aux === undefined) {
            throw new ValorNoEncontrado("No se encontro una tarea con la fecha buscada");
        }
        
        return aux.value;
    }
}