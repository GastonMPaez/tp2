import Tarea from "../src/clases/Tarea";
import { Prioridad } from "../src/Enum/Prioridad";
import ListaTarea from "../src/Listas/ListaTarea";
import OrdenarTareas from "../src/clases/auxiliar/ordenamiento/ordenarTarea";
import OrdenarPorTitulo from "../src/clases/auxiliar/ordenamiento/ordenarPorTitulo"
import OrdenarPorFecha from "../src/clases/auxiliar/ordenamiento/ordenarPorFecha"
import OrdenarPorPrioridad from "../src/clases/auxiliar/ordenamiento/ordenarPorPrioridad"
import NodoTarea from "../src/Listas/NodoTarea";
import { mock } from "jest-mock-extended";

describe("Test de la clase Ordenamiento", ()=>{

    let contexto: OrdenarTareas;
    let action: string;
       
    let lista = new ListaTarea();

    let mockTarea1 = mock<Tarea>();
    let mockTarea2 = mock<Tarea>();
    let mockTarea3 = mock<Tarea>();
    let mockTarea4 = mock<Tarea>();

    function cargarTareas(): void {
        
        mockTarea1.getTitulo.mockImplementation(()=>"Titulo11")
        mockTarea1.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea1.getFechaVec.mockImplementation(()=>19801026);
        mockTarea1.getPrioridad.mockImplementation(()=>Prioridad.ALTA);
        mockTarea1.getCategoria.mockImplementation(()=>"Categoria 111");
        mockTarea1.getEtiqueta.mockImplementation(()=>"Etiqueta 111");
        mockTarea1.getAvance.mockImplementation(()=>0);

        mockTarea2.getTitulo.mockImplementation(()=>"Titulo2");
        mockTarea2.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea2.getFechaVec.mockImplementation(()=>20201010);
        mockTarea2.getPrioridad.mockImplementation(()=>Prioridad.MEDIA);
        mockTarea2.getCategoria.mockImplementation(()=>"Categoria Prueba");
        mockTarea2.getEtiqueta.mockImplementation(()=>"Etiqueta Prueba");
        mockTarea2.getAvance.mockImplementation(()=>0);

        mockTarea3.getTitulo.mockImplementation(()=>"Comprar Pan");
        mockTarea3.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea3.getFechaVec.mockImplementation(()=>20241113);
        mockTarea3.getPrioridad.mockImplementation(()=>Prioridad.BAJA);
        mockTarea3.getCategoria.mockImplementation(()=>"Categoria Prueba");
        mockTarea3.getEtiqueta.mockImplementation(()=>"Etiqueta Prueba");
        mockTarea3.getAvance.mockImplementation(()=>0);

        mockTarea4.getTitulo.mockImplementation(()=>"Comprar Zapatillas");
        mockTarea4.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea4.getFechaVec.mockImplementation(()=>20141215);
        mockTarea4.getPrioridad.mockImplementation(()=>Prioridad.BAJA);
        mockTarea4.getCategoria.mockImplementation(()=>"Categoria Prueba");
        mockTarea4.getEtiqueta.mockImplementation(()=>"Etiqueta Prueba");
        mockTarea4.getAvance.mockImplementation(()=>0);
    }


    function setAction(valor: string) {
        action = valor;
    }

    function decidirTipo(action: string) {

        if (action === "Titulo" || action === "titulo") {
           contexto.setEstrategia(new OrdenarPorTitulo());
        } else if (action === "Fecha" || action === "fecha") {
            contexto.setEstrategia(new OrdenarPorFecha());
        } else if (action === "Prioridad" || action === "prioridad") {
            contexto.setEstrategia(new OrdenarPorPrioridad());
        } else {
            console.log("OPCION NO VALIDA");
            return;
        }
    }

    function ordenTit(head:NodoTarea){
        let current = head;
        while (current && current.next) {
            if (current.value.getTitulo() > current.next.value.getTitulo()) {
                return false; // lista no ordenada
            }
            current = current.next;
        }
        return true; // La lista ordenada
    }

    function ordenFecha(head:NodoTarea){
        let current = head;
        while (current && current.next) {
            if (current.value.getFechaVec() > current.next.value.getFechaVec()) {
                return false; // lista no ordenada
            }
            current = current.next;
        }
        return true; // lista ordenada
    }

    function ordenPrio(head:NodoTarea){
        let current = head;
        while (current && current.next) {
            if (current.value.getPrioridad() > current.next.value.getPrioridad()) {
                return false; // lista no ordenada
            }
            current = current.next;
        }
        return true; // lista ordenada
    }


    beforeEach(() => {
        contexto = new OrdenarTareas(new OrdenarPorTitulo());
        action = "";
        
        cargarTareas();
    });

    test('Ordenar la lista por titulo', () => {
        
        lista.push(mockTarea3);
        lista.push(mockTarea1);
        lista.push(mockTarea4);
        lista.push(mockTarea2);        
        
        setAction("Titulo");

        decidirTipo(action);

        contexto.ordenar(lista);

        expect(ordenTit(lista.getHead())).toBe(true);
        
        console.log(lista.imprimirTodo());
    });
    
    test('Ordenar la lista por Fecha', () => {
        
        lista.push(mockTarea3);
        lista.push(mockTarea1);
        lista.push(mockTarea4);
        lista.push(mockTarea2);

        setAction("fecha");

        decidirTipo(action);

        contexto.ordenar(lista);

        expect(ordenFecha(lista.getHead())).toBe(true);
        
        console.log(lista.imprimirTodo());
    });
    
    test('Ordenar la lista por Prioridad', () => {
        
        lista.push(mockTarea3);
        lista.push(mockTarea1);
        lista.push(mockTarea4);
        lista.push(mockTarea2);
        
        setAction("prioridad");

        decidirTipo(action);

        contexto.ordenar(lista);
        
        expect(ordenPrio(lista.getHead())).toBe(true);
        
        console.log(lista.imprimirTodo());
    });

});