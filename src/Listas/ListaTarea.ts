import Tarea from "../clases/Tarea";
import NodoTarea from "./NodoTarea";
import ConvertirFecha from "../clases/auxiliar/formatearFecha";

/**
 * Clase `ListaTarea` que representa una lista enlazada de tareas.
 */
export default class ListaTarea {
    private head: NodoTarea;
    
    /**
     * Crea una nueva instancia de `ListaTarea`.
     */
    constructor() {
        this.head = undefined as unknown as NodoTarea;
    }

    /**
     * Obtiene el nodo cabeza de la lista.
     * @returns {NodoTarea} El nodo cabeza de la lista.
     */
    public getHead(): NodoTarea {
        return this.head;
    }

    /**
     * Establece el nodo cabeza de la lista.
     * @param {NodoTarea} value - El nuevo nodo cabeza de la lista.
     */
    public setHead(value: NodoTarea) {
        this.head = value;
    }

    /**
     * Añade una tarea al final de la lista.
     * @param {Tarea} value - La tarea a añadir.
     * @returns {NodoTarea} El nodo añadido.
     */

    public push(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        let headAux = this.head;

        while (headAux && headAux.next) {
            headAux = headAux.next;
        }

        if (!headAux) {
            this.head = node;
        } else {
            headAux.next = node;
        }
        return node;
    }

    /**
     * Elimina la última tarea de la lista y la devuelve.
     * @returns {Tarea} La tarea eliminada.
     */
    public pop(): Tarea {
        let value = undefined;
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;

        while (headAux && headAux.next) {
            previous = headAux;
            headAux = headAux.next;
        }

        if (!previous) {
            this.head = undefined as unknown as NodoTarea;
        } else {
            previous.next = undefined as unknown as NodoTarea;
        }
        value = headAux.value;
        return value;

    } //pop borra el último nodo

    /**
     * Elimina la primera tarea de la lista y la devuelve.
     * @returns {Tarea} La tarea eliminada.
     */

    public removeFirst(): Tarea {
        let value = undefined as unknown as Tarea;

        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    }

    /**
     * Inserta una tarea en la lista de manera ordenada for fecha.
     * @param {Tarea} value - La tarea a insertar.
     * @returns {NodoTarea} El nodo insertado.
     */
    public insertOrderedFecha(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;

        while (headAux && headAux.value.getFechaVec() < value.getFechaVec()) {
            previous = headAux;
            headAux = headAux.next;
        }

        if (!previous) {
            this.head = node;
        } else {
            previous.next = node;
        }
        node.next = headAux;
        return node;
    }

    /**
     * Elimina una tarea específica de la lista.
     * @param {Tarea} value - La tarea a eliminar.
     * @returns {Tarea} La tarea eliminada.
     */

    public delete(value: Tarea): Tarea {
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;

        while (headAux && headAux.value !== value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = headAux.next;
        } else {
            previous.next = headAux.next;
        }
        return headAux.value;
    } //delete borra un nodo particular

    /**
     * Busca una tarea específica en la lista.
     * @param {Tarea} value - La tarea a buscar.
     * @returns {NodoTarea} El nodo que contiene la tarea buscada.
     */
    public search(value: Tarea): NodoTarea {
        let headAux = this.head;

        while (headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    }

    /**
     * Limpia la lista de tareas.
     */
    public clear(): void {
        while (this.head) {
            this.removeFirst();
        }
    }

    /**
     * Imprime todas las tareas de la lista en la consola.
     */
    public imprimirTodo(): void {
        let aux = this.head;
        let actual = aux;

        while (actual) {
            const tarea = actual.value;
            const fechaM: ConvertirFecha = new ConvertirFecha();
            console.log({
                titulo: tarea.getTitulo(),
                descripcion: tarea.getDescripcion(),
                fecha: (fechaM.convertirFecha(tarea.getFechaVec()).format('DD/MM/YYYY')),
                categoria: tarea.getCategoria(),
                etiqueta: tarea.getEtiqueta(),
                prioridad: tarea.getPrioridad(),
                avance: tarea.getAvance()
            });
            actual = actual.next;
        }
    }
}