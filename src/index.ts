import CargarArchivoJSON from "./archivos JSON/cargarJSON";
import { LeerArchivoJSON } from "./archivos JSON/leerJSON";
import Aplicacion from "./clases/Aplicacion";
import { CriterioBusqueda } from "./clases/auxiliar/busqueda/criterioBusqueda";
import EditarTarea from "./clases/auxiliar/editarTarea";
import Tarea from "./clases/Tarea";
import ListaTarea from "./Listas/ListaTarea";

async function main(){

    let aplicacion = new Aplicacion();
    let tarea:Tarea;
    let tarea1:Tarea;
    let tarea2:Tarea;
    let tarea3:Tarea;

    let editar = new EditarTarea();

    let listaI = new ListaTarea();
    let listaC = new ListaTarea();

    let criterioBusqueda = new CriterioBusqueda();

    let leerJSON = new LeerArchivoJSON();
    let cargarJSON = new CargarArchivoJSON();

/* creacion del archivo listaIncompleta.json
    //creacion y carga de tareas
    tarea1 = aplicacion.creardorT("Titulo55", "tarea de prueba 55", 19801015, 2, "Persona", "etiquetas genericas");
    tarea2 = aplicacion.creardorT("Titulo22", "tarea de prueba 22", 20200513, 1, "Automovil", "etiquetas genericas");
    tarea3 = aplicacion.creardorT("Titulo88", "tarea de prueba 88", 19990201, 0, "Comida", "etiquetas genericas");
    
    cargarJSON.cargarListaIncompleta(tarea1);
    cargarJSON.cargarListaIncompleta(tarea2);
    cargarJSON.cargarListaIncompleta(tarea3);
*/
    listaI = await leerJSON.listaTareasIncompleta();

    
    aplicacion.setActionBusqueda("titulo");
    //aplicacion.setActionBusqueda("fecha");

    criterioBusqueda.titulo = "Titulo22" // valor a buscar

    tarea = aplicacion.buscadorFunc(listaI, criterioBusqueda.toObjetoBusqueda());
    
    aplicacion.ordenarFunc(listaI, "titulo22");
    //console.log(listaI.imprimirTodo());

    aplicacion.editarTarea("fecha", listaI, tarea, 19850506);

}

main();