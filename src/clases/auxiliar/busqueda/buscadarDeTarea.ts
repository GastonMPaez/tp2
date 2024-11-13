import ListaTarea from "../../../Listas/ListaTarea";
import { BusquedaEstrategia } from "../../interfaces/busquedaEstrategia";
import Tarea from "../../Tarea";

export default class BuscadorDeTarea {
    private estrategia: BusquedaEstrategia;

    constructor(estrategia: BusquedaEstrategia){
        this.estrategia = estrategia;
    }

    public setEstrategia(estrategia: BusquedaEstrategia): void{
        this.estrategia = estrategia;
    }

    public buscar(lista:ListaTarea, valor:any): Tarea{
        return this.estrategia.buscar(lista, valor);
    }
}
/*
pasarle valor: Objeto
el objeto le pido el valor */