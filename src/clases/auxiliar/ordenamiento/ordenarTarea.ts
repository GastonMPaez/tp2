import ListaTarea from "../../../Listas/ListaTarea";
import { OrdenamientoEstrategia } from "../../interfaces/ordenamientoEstrategia";

/** * Clase `OrdenarTareas` que se encarga de ordenar tareas utilizando una estrategia específica. */
export default class OrdenarTareas {
    private estrategia: OrdenamientoEstrategia;
    
    /** * Crea una nueva instancia de `OrdenarTareas`. 
    * @param {OrdenamientoEstrategia} estrategia - La estrategia de ordenamiento que se utilizará. */
    constructor(estrategia: OrdenamientoEstrategia) {
        this.estrategia = estrategia;
    }
    /** * Establece una nueva estrategia de ordenamiento. 
    * @param {OrdenamientoEstrategia} estrategia - La nueva estrategia de ordenamiento. */
    public setEstrategia(estrategia: OrdenamientoEstrategia): void{
        this.estrategia = estrategia;
    }
    /** * Ordena una lista de tareas utilizando la estrategia definida. 
    * @param {ListaTarea} lista - La lista de tareas que se va a ordenar. */
    public ordenar(lista:ListaTarea): void{
        this.estrategia.ordenar(lista);
    }
}