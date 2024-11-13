import Tarea from "../clases/Tarea";
import NodoTarea from "./NodoTarea";

export default class ListaTarea {
    private head: NodoTarea;
    
    constructor() {
        this.head = undefined as unknown as NodoTarea;
    }

    public getHead(): NodoTarea {
        return this.head;
    }

    public setHead(value: NodoTarea){
        this.head = value
    }
    
    public push(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        let headAux = this.head;

        while (headAux && headAux.next) {
            headAux = headAux.next;
        }

        if (!headAux) {
            this.head = node
        }
        else {
            headAux.next = node;
        }
        return node;
    }

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

        }
        else {
            previous.next = undefined as unknown as NodoTarea;
        }
        value = headAux.value;
        return value;
    }//pop borra el ultimo nodo

 
    public insertFirst(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        node.next = this.head;
        this.head = node;
        return node;
    }

    public removeFirst(): Tarea {
        let value = undefined as unknown as Tarea;

        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    }

    public insertOrdered(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;

        while (headAux && headAux.value < value) {
            previous = headAux;
            headAux = headAux.next;
        }

        if (!previous) {
            this.head = node;
        }
        else {
            previous.next = node;
        }
        node.next = headAux;
        return node;
    }

    insertUnique(value: Tarea): NodoTarea {
        const node = this.search(value);
        
        if (!node) {
            this.insertOrdered(value);
        }
        return node;
    }
    
    public delete(value: Tarea): Tarea {
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;
        
        while (headAux && headAux.value !== value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = headAux.next;
        }
        else {
            previous.next = headAux.next;
        }
        return headAux.value;
    }//delete borra un nodo particular
   
    public search(value: Tarea): NodoTarea {
        let headAux = this.head;
        
        while (headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    }
    
    public sort(): void {
        let value: Tarea;
        let ListaTareaux = new ListaTarea();
        
        while (this.head) {
            value = this.removeFirst();
            ListaTareaux.insertOrdered(value);
        }
        this.head = ListaTareaux.head;
        ListaTareaux.clear();
    }

    public clear(): void {
        while (this.head) {
            this.removeFirst();
        }
    }

    public imprimirTodo(): void {
        let aux = this.head
        let actual = aux;
    
        while (actual) {
            console.log(actual.value);
            actual = actual.next;
        }
    }  
    
}