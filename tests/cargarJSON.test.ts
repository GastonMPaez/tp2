import CargarArchivoJSON  from "../src/archivos JSON/cargarJSON"
import path from "path"
import Tarea from "../src/clases/Tarea";
import { Prioridad } from "../src/Enum/Prioridad";

// Mock de la clase CustomFileClass fuera del describe
const mockOpen = jest.fn();
const mockWriteToFile = jest.fn();
const mockClose = jest.fn();

jest.mock("stdio", () => {
    return {
        CustomFileClass: jest.fn().mockImplementation(() => {
            return {
                open: mockOpen,
                writeToFile: mockWriteToFile,
                close: mockClose,
            };
        }),
    };
});


describe("Test de la clase CargarArchivoJSON", ()=>{

    let cargarArchivo:CargarArchivoJSON;
    let mockTarea: jest.Mocked<Tarea>;


    function tareaMock(): jest.Mocked<Tarea> {
        const mockTarea = new Tarea("Titulo Mock", "Descripcion Mock", 20011109, Prioridad.ALTA, "Categoria Mock", "Etiqueta Mock") as jest.Mocked<Tarea>;

        mockTarea.getTitulo = jest.fn(() => "Titulo Mock");
        mockTarea.getDescripcion = jest.fn(() => "Descripcion Mock");
        mockTarea.getFechaVec = jest.fn(() => 20011109);
        mockTarea.getPrioridad = jest.fn(() => Prioridad.ALTA);
        mockTarea.getCategoria = jest.fn(() => "Categoria Mock");
        mockTarea.getEtiqueta = jest.fn(() => "Etiqueta Mock");

        return mockTarea;
    }

    beforeEach(()=>{
        jest.clearAllMocks();
        cargarArchivo = new CargarArchivoJSON()
        mockTarea = tareaMock();
    });

    test("Agregar una tarea a listaIncompleta.json", ()=>{
        cargarArchivo.cargarListaIncompleta(mockTarea);

        expect(mockOpen).toHaveBeenCalledWith(path.resolve("listaIncompleta.json"), "a");
        expect(mockWriteToFile).toHaveBeenCalledWith(JSON.stringify(mockTarea));
        expect(mockClose).toHaveBeenCalled();
    });

    test("Agregar una tarea a listaCompleta.json", ()=>{
        mockTarea.setAvance(100);

        cargarArchivo.cargarListaCompleta(mockTarea);

        expect(mockOpen).toHaveBeenCalledWith(path.resolve("listaCompleta.json"), "a");
        expect(mockWriteToFile).toHaveBeenCalledWith(JSON.stringify(mockTarea));
        expect(mockClose).toHaveBeenCalled();
    });

});