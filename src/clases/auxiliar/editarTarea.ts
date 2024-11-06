import { Prioridad } from "../../Enum/Prioridad";
import ListaTarea from "../../Listas/ListaTarea";
import NodoTarea from "../../Listas/NodoTarea";
import Tarea from "../Tarea";

export default class EditarTarea {

    public static editarTitulo(lista: ListaTarea, tarea: Tarea, nuevoTitulo: string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setTitulo(nuevoTitulo);
        }
    }

    public static editarDescripcion(lista: ListaTarea, tarea: Tarea, nuevaDescripcion: string): void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setDescripcion(nuevaDescripcion);
        }
    }

    public static editarFechaVec(lista: ListaTarea, tarea: Tarea, nuevoVec: Date):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setFechaVec(nuevoVec);
        }
    }

    public static editarPrioridad(lista: ListaTarea, tarea: Tarea, nuevaPrioridad: Prioridad):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setPrioridad(nuevaPrioridad);
        }
    }

    public static editarCategoria(lista: ListaTarea, tarea: Tarea, nuevaCategoria: string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setCategoria(nuevaCategoria);
        }
    }

    public static editarEtiqueta(lista: ListaTarea, tarea: Tarea, nuevaEtiqueta:string):void{
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if(nodoAux != null){
            nodoAux.value.setEtiqueta(nuevaEtiqueta);
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