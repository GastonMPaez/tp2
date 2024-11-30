
import ListaTarea from "../src/Listas/ListaTarea";
import NodoTarea from "../src/Listas/NodoTarea";
import { Prioridad } from "../src/Enum/Prioridad";
import { mock } from "jest-mock-extended";
import Tarea from "../src/clases/Tarea";


describe("Prueba de la clase ListaTarea", () => {
    let listaTarea:ListaTarea;
    let tarea1 = mock<Tarea>();
    let tarea2 = mock<Tarea>();
    let tarea3 = mock<Tarea>();
    let head: NodoTarea;

    function cargarTarea(){
        tarea1.getTitulo.mockImplementation(() => "tarea1");
        tarea1.getDescripcion.mockImplementation(() => "Hola");
        tarea1.getFechaVec.mockImplementation(() => 20241122);
        tarea1.getPrioridad.mockImplementation(() => Prioridad.ALTA);
        tarea1.getCategoria.mockImplementation(() => "TEST");
        tarea1.getEtiqueta.mockImplementation(() => "TAREA");
        tarea1.getAvance.mockImplementation(() => 0);

        tarea2.getTitulo.mockImplementation(() => "tarea2");
        tarea2.getDescripcion.mockImplementation(() => "Hola");
        tarea2.getFechaVec.mockImplementation(() => 20241123);
        tarea2.getPrioridad.mockImplementation(() => Prioridad.ALTA);
        tarea2.getCategoria.mockImplementation(() => "TEST");
        tarea2.getEtiqueta.mockImplementation(() => "TAREA");
        tarea2.getAvance.mockImplementation(() => 0);

        tarea3.getTitulo.mockImplementation(() => "tarea3");
        tarea3.getDescripcion.mockImplementation(() => "Hola");
        tarea3.getFechaVec.mockImplementation(() => 20241124);
        tarea3.getPrioridad.mockImplementation(() => Prioridad.ALTA);
        tarea3.getCategoria.mockImplementation(() => "TEST");
        tarea3.getEtiqueta.mockImplementation(() => "TAREA");
        tarea3.getAvance.mockImplementation(() => 0);
    }

    beforeEach(() =>{
        cargarTarea();
        head = new NodoTarea(tarea1);
        listaTarea = new ListaTarea();
    });
    
    test("Prueba del set", () => {
        listaTarea.setHead(head);
        expect(listaTarea.getHead()).toBeInstanceOf(NodoTarea);
    });
    
    test("Prueba del get", () => {
        listaTarea.setHead(head);
        expect(listaTarea.getHead().value.getTitulo()).toBe("tarea1");
        expect(listaTarea.getHead().value.getDescripcion()).toBe("Hola");
        expect(listaTarea.getHead().value.getFechaVec()).toBe(20241122);
        expect(listaTarea.getHead().value.getPrioridad()).toBe(Prioridad.ALTA);
        expect(listaTarea.getHead().value.getCategoria()).toBe("TEST");
        expect(listaTarea.getHead().value.getEtiqueta()).toBe("TAREA"); 
        expect(listaTarea.getHead().value.getAvance()).toBe(0);
    });
    
    test("Prueba del push", () => {
        listaTarea.push(tarea1);
        listaTarea.push(tarea2);
        
        expect(listaTarea.getHead().next.value).toEqual(tarea2);
        console.log(listaTarea.imprimirTodo());
    });

    
    test("Prueba del pop", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);
    
        expect(listaTarea.pop()).toBeInstanceOf(Object as unknown as Tarea);
        expect(listaTarea.pop()).toBeInstanceOf(Object as unknown as Tarea);
        
    });
    
    test("Prueba Remove First", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);
        listaTarea.push(tarea3);

        let primerNodo = listaTarea.removeFirst();
        expect(primerNodo).toEqual(tarea1);
    });

    test("Prueba Insert Ordered Fecha", () => {
        listaTarea.insertOrderedFecha(tarea2);
        listaTarea.insertOrderedFecha(tarea3);
        expect(listaTarea.getHead().value).toBe(tarea2);
    });

    test("Prueba del delete", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);
        listaTarea.delete(tarea2);
        listaTarea.delete(tarea1);
        expect(listaTarea.getHead()).toBeUndefined();
    });

    test("Prueba del search", () =>{
        listaTarea.setHead(head);
        listaTarea.push(tarea2);
        let nodoBuscado = listaTarea.search(tarea2);
        expect(nodoBuscado.value).toEqual(tarea2);
    });

    test("Prueba del Clear", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);

        expect(listaTarea.getHead()).toBeDefined();
        listaTarea.clear();
        expect(listaTarea.getHead()).toBeUndefined();
    });

    test("Prueba Imprimir Lista", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);

        expect(console.log(listaTarea.imprimirTodo)).toBe(listaTarea.imprimirTodo());
    });

});