import { mock } from 'jest-mock-extended'
import Aplicacion from "../src/clases/Aplicacion"; // Ajusta la ruta si es necesario
import ListaTarea from "../src/Listas/ListaTarea";
import Tarea from "../src/clases/Tarea"
import { objetoBusqueda } from "../src/clases/interfaces/objetoBusqueda";
import ValorNoEncontrado from "../src/excepciones/error";
import { Prioridad } from "../src/Enum/Prioridad";
import NodoTarea from '../src/Listas/NodoTarea';

jest.mock("../src/Listas/ListaTarea");
jest.mock("../src/clases/Tarea");


describe("Aplicacion", () => {
    let app: Aplicacion;
    let listaTarea: ListaTarea;

    let listaMock: jest.Mocked<ListaTarea>;
    let mockTarea1: jest.Mocked<Tarea>;
    let mockTarea2: jest.Mocked<Tarea>;
    let mockTarea3: jest.Mocked<Tarea>;
   
    // Crear un mock para la clase NodoTarea
    jest.mock("../src/Listas/NodoTarea", () => {
      return jest.fn().mockImplementation(() => {
        return {
          value: jest.fn(),
          next: jest.fn()
        };
      });
    });
    
    // Crear un mock para la clase ListaTarea
    const mockListaTarea = jest.fn().mockImplementation(() => {
      return {
        getHead: jest.fn(),
        setHead: jest.fn(),
        push: jest.fn(),
        pop: jest.fn(),
        removeFirst: jest.fn(),
        insertOrderedFecha: jest.fn(),
        delete: jest.fn(),
        search: jest.fn(),
        clear: jest.fn(),
        imprimirTodo: jest.fn()
      };
    });
    
    function cargarTareas() {
        mockTarea1 = {
            getTitulo: jest.fn(() => "Titulo 1"),
            setTitulo: jest.fn(),
            getDescripcion: jest.fn(() => "Descripcion Prueba"),
            getFechaVec: jest.fn(() => 19490506),
            getPrioridad: jest.fn(() => Prioridad.ALTA),
            getCategoria: jest.fn(() => "Categoria 111"),
            getEtiqueta: jest.fn(() => "Etiqueta 111"),
            getAvance: jest.fn(() => 0),
        } as unknown as jest.Mocked<Tarea>;

        mockTarea2 = {
            getTitulo: jest.fn(() => "Zapatillas"),
            setTitulo: jest.fn(),
            getDescripcion: jest.fn(() => "Descripcion Prueba"),
            getFechaVec: jest.fn(() => 20201010),
            getPrioridad: jest.fn(() => Prioridad.MEDIA),
            getCategoria: jest.fn(() => "Categoria Prueba"),
            getEtiqueta: jest.fn(() => "Etiqueta Prueba"),
            getAvance: jest.fn(() => 0),
        } as unknown as jest.Mocked<Tarea>;

        mockTarea3 = {
            getTitulo: jest.fn(() => "Comprar Pan"),
            setTitulo: jest.fn(),
            getDescripcion: jest.fn(() => "Descripcion Prueba"),
            getFechaVec: jest.fn(() => 20241113),
            getPrioridad: jest.fn(() => Prioridad.BAJA),
            getCategoria: jest.fn(() => "Categoria Prueba"),
            getEtiqueta: jest.fn(() => "Etiqueta Prueba"),
            getAvance: jest.fn(() => 0),
        } as unknown as jest.Mocked<Tarea>;
    }

    beforeEach(() => {
        app = new Aplicacion();
        listaMock = {
            getHead: jest.fn(),
            push: jest.fn(),
            search: jest.fn(),
        } as unknown as jest.Mocked<ListaTarea>;

        listaMock.search = jest.fn((tarea: Tarea) => {
            return {
                value: tarea, // NodoTarea con la tarea
            } as NodoTarea;
        });

        listaTarea = new (mockListaTarea as unknown as { new (): ListaTarea })();

        cargarTareas();
    });

    test("Funcion creadorT()", ()=>{
        let tarea = app.creardorT("Tarea test 1", "descripcion 11", 20250620, 1, "Cat_generic", "et_generic");

        expect(tarea).toBeUndefined;
    });

    test("Funcion agregarNuevaTarea()", ()=>{
        app.agregarNuevaTarea(mockTarea1);
        expect(listaMock.push).toHaveBeenCalledWith(mockTarea1);
    });

    test("Editar tarea titulo", ()=>{
        listaMock.push(mockTarea1);
        listaMock.push(mockTarea2);
        listaMock.push(mockTarea3);

        app.editarTarea("titulo", listaMock, mockTarea1, "Nuevo_Titulo");

        expect(mockTarea1.setTitulo).toHaveBeenCalledWith("Nuevo_Titulo");
        expect(listaMock.search).toHaveBeenCalledWith(mockTarea1);
        
    });

    test("Funcion eliminarUnaTarea()", ()=>{
        listaTarea.push(mockTarea1);
        listaTarea.push(mockTarea2);

        app.eliminarUnaTarea(mockTarea1);
        expect(listaTarea.delete).toHaveBeenCalledWith(mockTarea1);
    });

    test("Funcion getListaDeTareasIncompletas()", ()=>{
        let listaI = new ListaTarea();

        listaI = app.getListaDeTareasIncompletas();

    });

    test("Funcion getListaDeTareasCompletas()", ()=>{

    });

    test("Funcion buscadorFunc()", ()=>{

    });

    test("Funcion ordenarFunc()", ()=>{

    });

});