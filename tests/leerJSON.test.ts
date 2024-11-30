import { LeerArchivoJSON } from "../src/archivos JSON/leerJSON";
import ListaTarea from "../src/Listas/ListaTarea";


describe("Test de la clase LeerArchivoJSON", ()=>{
    let lista:ListaTarea;
    let leerArchivo:LeerArchivoJSON;

    beforeEach(()=>{
        leerArchivo = new LeerArchivoJSON();
        lista = new ListaTarea();
    });

    test("Lee las tareas incompletas desde el archivo listaIncompleta.json", async ()=>{
        lista = await leerArchivo.listaTareasIncompleta();

        expect(JSON.stringify(lista)).toEqual("{\"head\":{\"_value\":{\"titulo\":\"Titulo55\",\"descripcion\":\"tarea de prueba 55\",\"fechaVec\":19801015,\"prioridad\":\"Persona\",\"categoria\":\"etiquetas genericas\",\"etiqueta\":2,\"avance\":0}}}");
        
    });

    test("Lee las tareas completas desde el archivo listaCompleta.json", async ()=>{
        lista = await leerArchivo.listaTareasCompleta();

        expect(JSON.stringify(lista)).toEqual("{\"head\":{\"_value\":{\"titulo\":\"Titulo1\",\"descripcion\":\"tarea de prueba 1\",\"fechaVec\":19801015,\"prioridad\":\"Persona\",\"categoria\":\"etiquetas genericas\",\"etiqueta\":0,\"avance\":0}}}");
    });
});