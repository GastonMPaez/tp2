import Tarea from "../clases/Tarea";

export default class NodoTarea {
    private _value: Tarea;
    private _next: NodoTarea;
    
    constructor(value: Tarea) {
        this._value = value;
        this._next = undefined as unknown as NodoTarea;
    }
    
    public get value(): Tarea {
        return this._value;
    }
    
    public get next(): NodoTarea {
        return this._next;
    }
    
    public set next(n: NodoTarea) {
        this._next = n;
    }
}