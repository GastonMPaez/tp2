import { mock } from "jest-mock-extended";
import { Prioridad } from "../src/Enum/Prioridad";
import Tarea from "../src/clases/Tarea";
import ListaTarea from "../src/Listas/ListaTarea";
import EditarTarea from "../src/clases/auxiliar/editarTarea";
import NodoTarea from "../src/Listas/NodoTarea";

describe('EditarTarea - Lista con múltiples tareas', () => {
    let editarFunc: EditarTarea;
    let mockListaTarea = mock<ListaTarea>();

    let mockTarea1 = mock<Tarea>();
    let mockTarea2 = mock<Tarea>();

    let mockNodoTarea1 = mock<NodoTarea>();
    let mockNodoTarea2 = mock<NodoTarea>();

    function cargarLista() {
        // Mock de la lista, simulamos que contiene varios nodos
        mockListaTarea.search.mockImplementation((tarea) => {
            if (tarea === mockTarea1) return mockNodoTarea1 as unknown as NodoTarea;
            if (tarea === mockTarea2) return mockNodoTarea2 as unknown as NodoTarea;
            return null as unknown as NodoTarea;
        });
    }

    function cargarNodos() {
        // Configurar los nodos para que apunten a las tareas respectivas
        mockNodoTarea1 = {
            get value() {
                return mockTarea1;
            },
        } as unknown as NodoTarea;

        mockNodoTarea2 = {
            get value() {
                return mockTarea2;
            },
        } as unknown as NodoTarea;
    }

    beforeEach(() => {
        editarFunc = new EditarTarea();
        mockListaTarea = mock<ListaTarea>();

        cargarNodos();
        cargarLista();

    });

    test("Editar el Titulo de la tarea 1 y tarea 2", () => {
        const tituloPrueba = "Panaderia";

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarTitulo(mockListaTarea, mockTarea1, tituloPrueba);
        editarFunc.editarTitulo(mockListaTarea, mockTarea2, "Mecanico");

        // Verificar que se edita el titulo de la tarea especifica
        expect(mockTarea1.setTitulo).toHaveBeenCalledWith(tituloPrueba);
        expect(mockTarea2.setTitulo).toHaveBeenCalledWith("Mecanico");

    });

    test("Editar la Descripcion de la tarea 1 y la tarea 2", () => {
        const descripcionPrueba = "Comprar 2kg de pan";

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarDescripcion(mockListaTarea, mockTarea1, descripcionPrueba);
        editarFunc.editarDescripcion(mockListaTarea, mockTarea2, "LLevar el auto al mecanico");

        // Verificar que se edita la descripcion de la tarea especifica
        expect(mockTarea1.setDescripcion).toHaveBeenCalledWith(descripcionPrueba);
        expect(mockTarea2.setDescripcion).toHaveBeenCalledWith("LLevar el auto al mecanico");

    });
    
    test("Editar la Faceha de Vencimiento de la tarea 1 y la tarea 2", () => {
        const FechaVecPrueba = 18100525;

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarFechaVec(mockListaTarea, mockTarea1, FechaVecPrueba);
        editarFunc.editarFechaVec(mockListaTarea, mockTarea2, 19390901);

        // Verificar que se edita la Fecha de vencimiento de la tarea especifica
        expect(mockTarea1.setFechaVec).toHaveBeenCalledWith(FechaVecPrueba);
        expect(mockTarea2.setFechaVec).toHaveBeenCalledWith(19390901);

    });
    
    test("Editar la Prioridad de la tarea 1 y la tarea 2", () => {
        const prioridadPrueba = Prioridad.ALTA;

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarPrioridad(mockListaTarea, mockTarea1, prioridadPrueba);
        editarFunc.editarPrioridad(mockListaTarea, mockTarea2, 1);

        // Verificar que se edita la Prioridad de la tarea especifica
        expect(mockTarea1.setPrioridad).toHaveBeenCalledWith(0);
        expect(mockTarea2.setPrioridad).toHaveBeenCalledWith(Prioridad.MEDIA);

    });
    
    test("Editar la Categoria de la tarea 1 y la tarea 2", () => {
        const categoriaPrueba = "Alimento";

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarCategoria(mockListaTarea, mockTarea1, categoriaPrueba);
        editarFunc.editarCategoria(mockListaTarea, mockTarea2, "Vehiculo");

        // Verificar que se edita la categoria de la tarea especifica
        expect(mockTarea1.setCategoria).toHaveBeenCalledWith(categoriaPrueba);
        expect(mockTarea2.setCategoria).toHaveBeenCalledWith("Vehiculo");

    });
    
    test("Editar la Etiqueta de la tarea 1 y la tarea 2", () => {
        const etiquetaPrueba = "Gluten, Hariana";

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarEtiqueta(mockListaTarea, mockTarea1, etiquetaPrueba);
        editarFunc.editarEtiqueta(mockListaTarea, mockTarea2, "Automovil, Reparacion");

        // Verificar que se edita las etiquetas de la tarea especifica
        expect(mockTarea1.setEtiqueta).toHaveBeenCalledWith(etiquetaPrueba);
        expect(mockTarea2.setEtiqueta).toHaveBeenCalledWith("Automovil, Reparacion");

    });
    
    test("Editar el Avance de la tarea 1 y la tarea 2", () => {
        const avancePrueba = 50;

        // Ejecutar el metodo para editar mockTarea1 y mockTarea2
        editarFunc.editarAvance(mockListaTarea, mockTarea1, avancePrueba);
        editarFunc.editarAvance(mockListaTarea, mockTarea2, 100);

        // Verificar que se edita el avance de la tarea especifica
        expect(mockTarea1.setAvance).toHaveBeenCalledWith(avancePrueba);
        expect(mockTarea2.setAvance).toHaveBeenCalledWith(100);

    });
});