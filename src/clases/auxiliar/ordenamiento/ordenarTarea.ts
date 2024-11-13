import ListaTarea from "../../../Listas/ListaTarea";
import { OrdenamientoEstrategia } from "../../interfaces/ordenamientoEstrategia";

export default class OrdenarTareas {
    private estrategia: OrdenamientoEstrategia;
    
    constructor(estrategia: OrdenamientoEstrategia) {
        this.estrategia = estrategia;
    }

    public setEstrategia(estrategia: OrdenamientoEstrategia): void{
        this.estrategia = estrategia;
    }

    public ordenar(lista:ListaTarea): void{
        return this.estrategia.ordenar(lista);
    }
}