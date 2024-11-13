import { Prioridad } from "../../Enum/Prioridad";
import ListaTarea from "../../Listas/ListaTarea";
import NodoTarea from "../../Listas/NodoTarea";
import Tarea from "../Tarea";

export default class EditarTarea {

    public editarTitulo(lista: ListaTarea, tarea: Tarea, nuevoTitulo: string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setTitulo(nuevoTitulo);
        }
    }

    public editarDescripcion(lista: ListaTarea, tarea: Tarea, nuevaDescripcion: string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setDescripcion(nuevaDescripcion);
        }
    }

    public editarFechaVec(lista: ListaTarea, tarea: Tarea, nuevoVec: number):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setFechaVec(nuevoVec);
        }
    }

    public editarPrioridad(lista: ListaTarea, tarea: Tarea, nuevaPrioridad: Prioridad):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setPrioridad(nuevaPrioridad);
        }
    }

    public editarCategoria(lista: ListaTarea, tarea: Tarea, nuevaCategoria: string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setCategoria(nuevaCategoria);
        }
    }

    public editarEtiqueta(lista: ListaTarea, tarea: Tarea, nuevaEtiqueta:string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setEtiqueta(nuevaEtiqueta);
        }
    }

    public editarAvance(lista: ListaTarea, tarea: Tarea, nuevoAvance: number):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setAvance(nuevoAvance);
        }
    }
}

/*
un título --
una descripción --
una fecha de vencimiento --
un nivel de prioridad --
cualquier etiqueta
o categoría relevante
*/