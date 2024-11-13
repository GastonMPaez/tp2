import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";
import ValorNoEncontrado from "../../../excepciones/error";
/**
 * @class BusquedaPorTitulo
 * @implements BusquedaEstrategia
 */
export default class BusquedaPorTitulo implements BusquedaEstrategia {

    /**
    * @funcion buscar
    * @description esta funcion al recibir una lista y un valor de tipo String,
    * buscara el nodo Tarea correspondiente dentro de la lista
    */
    public buscar(lista: ListaTarea, titulo: string):Tarea {
        
        let aux = lista.getHead();
        
        while(aux.value.getTitulo() != titulo){
            aux = aux.next;
        }

        if (aux === undefined) {
            throw new ValorNoEncontrado("No se encontró una tarea con el título buscado");
        }

        return aux.value; //valor exacto de la tarea con el titulo PEPE
    }
}

/*
        while(aux !== undefined && aux.value.getTitulo() != titulo){
            aux = aux.next;
        }
*/