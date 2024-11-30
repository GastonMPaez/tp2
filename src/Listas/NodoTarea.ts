import Tarea from "../clases/Tarea";

/**
 * Clase `NodoTarea` que representa un nodo en una lista enlazada de tareas.
 */
export default class NodoTarea {
    private _value: Tarea;
    private _next: NodoTarea;
    
    /**
     * Crea una nueva instancia de `NodoTarea`.
     * @param {Tarea} value - La tarea almacenada en el nodo.
     */
    constructor(value: Tarea) {
        this._value = value;
        this._next = undefined as unknown as NodoTarea;
    }
    
    /**
     * Obtiene la tarea almacenada en el nodo.
     * @returns {Tarea} La tarea almacenada en el nodo.
     */
    public get value(): Tarea {
        return this._value;
    }
    
    /**
     * Obtiene el siguiente nodo en la lista.
     * @returns {NodoTarea} El siguiente nodo en la lista.
     */
    public get next(): NodoTarea {
        return this._next;
    }
    
    /**
     * Establece el siguiente nodo en la lista.
     * @param {NodoTarea} n - El nuevo siguiente nodo en la lista.
     */
    public set next(n: NodoTarea) {
        this._next = n;
    }
}