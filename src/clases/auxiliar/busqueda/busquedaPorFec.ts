import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";
import ValorNoEncontrado from "../../../excepciones/error";

export default class BusquedaPorFecha implements BusquedaEstrategia {

    public buscar(lista: ListaTarea, fecha: number):Tarea {
        
        let aux = lista.getHead();
        
        while(aux.value.getFechaVec() != fecha){
            aux = aux.next;
        }
        
        if (aux === undefined) {
            throw new ValorNoEncontrado("No se encontró una tarea con el título");
        }
        return aux.value;
    }
}