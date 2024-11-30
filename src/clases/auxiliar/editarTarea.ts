import { Prioridad } from "../../Enum/Prioridad";
import ListaTarea from "../../Listas/ListaTarea";
import NodoTarea from "../../Listas/NodoTarea";
import Tarea from "../Tarea";

/**
 * Clase `EditarTarea` que se encarga de editar diferentes atributos de una tarea.
 */
export default class EditarTarea {

    /**
     * Edita el título de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {string} nuevoTitulo - El nuevo título para la tarea.
     */
    public editarTitulo(lista: ListaTarea, tarea: Tarea, nuevoTitulo: string): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setTitulo(nuevoTitulo);
        }
    }

    /**
     * Edita la descripción de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {string} nuevaDescripcion - La nueva descripción para la tarea.
     */
    public editarDescripcion(lista: ListaTarea, tarea: Tarea, nuevaDescripcion: string): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setDescripcion(nuevaDescripcion);
        }
    }

    /**
     * Edita la fecha de vencimiento de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {number} nuevoVec - La nueva fecha de vencimiento para la tarea.
     */
    public editarFechaVec(lista: ListaTarea, tarea: Tarea, nuevoVec: number): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setFechaVec(nuevoVec);
        }
    }

    /**
     * Edita la prioridad de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {Prioridad} nuevaPrioridad - La nueva prioridad para la tarea.
     */
    public editarPrioridad(lista: ListaTarea, tarea: Tarea, nuevaPrioridad: Prioridad): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setPrioridad(nuevaPrioridad);
        }
    }

    /**
     * Edita la categoría de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {string} nuevaCategoria - La nueva categoría para la tarea.
     */
    public editarCategoria(lista: ListaTarea, tarea: Tarea, nuevaCategoria: string): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setCategoria(nuevaCategoria);
        }
    }

    /**
     * Edita la etiqueta de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {string} nuevaEtiqueta - La nueva etiqueta para la tarea.
     */
    public editarEtiqueta(lista: ListaTarea, tarea: Tarea, nuevaEtiqueta: string): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setEtiqueta(nuevaEtiqueta);
        }
    }

    /**
     * Edita el avance de una tarea.
     * @param {ListaTarea} lista - La lista de tareas que contiene la tarea a editar.
     * @param {Tarea} tarea - La tarea a editar.
     * @param {number} nuevoAvance - El nuevo avance para la tarea.
     */
    public editarAvance(lista: ListaTarea, tarea: Tarea, nuevoAvance: number): void {
        let nodoAux: NodoTarea;
        nodoAux = lista.search(tarea);

        if (nodoAux != null) {
            nodoAux.value.setAvance(nuevoAvance);
        }
    }
}