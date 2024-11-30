import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import { objetoBusqueda } from "../../interfaces/objetoBusqueda";
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";
import ValorNoEncontrado from "../../../excepciones/error";

/** * Clase `BusquedaPorTitulo` que se encarga de 
 * buscar tareas por titulo. */
export default class BusquedaPorTitulo implements BusquedaEstrategia {

    /** * Crea una nueva instancia de `BuscadorDeTarea`. * 
     * @param {ListaTarea} lista - La lista donde vamos a realizar una busqueda 
     * @param {objetoBusqueda} valor - El valor por el cual se va a hacer la busqueda 
     * @returns {Tarea} - la tarea encontrada*/
    public buscar(lista: ListaTarea, valor: objetoBusqueda):Tarea {
        
        let aux = lista.getHead();
        
        while(aux !== undefined && aux.value.getTitulo() != valor.titulo){
            aux = aux.next;
        }

        if (aux === undefined) {
            throw new ValorNoEncontrado("No se encontro una tarea con el titulo buscado");
        }

        return aux.value;
    }
}