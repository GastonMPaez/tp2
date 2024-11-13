import BuscadorDeTarea from "./auxiliar/busqueda/buscadarDeTarea";
import BusquedaPorFecha from "./auxiliar/busqueda/busquedaPorFec";
import BusquedaPorTitulo from "./auxiliar/busqueda/busquedaPorTitulo";
import OrdenarPorFecha from "./auxiliar/ordenamiento/ordenarPorFecha";
import OrdenarPorPrioridad from "./auxiliar/ordenamiento/ordenarPorPrioridad";
import OrdenarPorTitulo from "./auxiliar/ordenamiento/ordenarPorTitulo";
import OrdenarTareas from "./auxiliar/ordenamiento/ordenarTarea";
/*
export default class Extra{

    private contextBusq = new BuscadorDeTarea();
    private contextOrd = new OrdenarTareas();
    const actionBusq: string;
    const actionOrd:string;

    public setAction(valor:string){
        this.actionBusq = valor;
    }

    public setAction2(valor:string){
        this.actionOrd = valor;
    }

    public busQ(){
        if (this.actionBusq === "Titulo"){
            this.contextBusq.setEstrategia(new BusquedaPorTitulo());
        } else if (this.actionBusq === "Fecha"){
            this.contextBusq.setEstrategia(new BusquedaPorFecha());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
            return;
        }
    }
    const result = this.contextBusq.setEstrategia(lista, "Titulo1");

    public Ord(){
        if (this.actionOrd === "Titulo"){
            this.contextOrd.setEstrategia(new OrdenarPorTitulo());
        } else if (this.actionOrd === "Fecha"){
            this.contextOrd.setEstrategia(new OrdenarPorFecha());
        } else if(this.actionOrd === "Prioridad"){
            this.contextOrd.setEstrategia(new OrdenarPorPrioridad());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
            return;
        }
    }

}

*/