import { objetoBusqueda } from "./interfaces/objetoBusqueda";
import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import Tarea from "./Tarea";
import BuscadorDeTarea from "./auxiliar/busqueda/buscadarDeTarea";
import BusquedaPorTitulo from "./auxiliar/busqueda/busquedaPorTitulo";
import BusquedaPorFecha from "./auxiliar/busqueda/busquedaPorFec";
import OrdenarPorPrioridad from "./auxiliar/ordenamiento/ordenarPorPrioridad";
import OrdenarPorFecha from "./auxiliar/ordenamiento/ordenarPorFecha";
import OrdenarPorTitulo from "./auxiliar/ordenamiento/ordenarPorTitulo";
import OrdenarTareas from "./auxiliar/ordenamiento/ordenarTarea";
import ValorNoEncontrado from "../excepciones/error";


/**
 * Clase `Aplicacion` que maneja la lista de tareas y las operaciones relacionadas con ellas.
 */
export default class Aplicacion {

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;

    private creador: CrearTarea;
    private editor: EditarTarea;

    protected contextoBusqueda: BuscadorDeTarea;
    protected actionBusqueda: string;
    protected contextoOrdenamiento: OrdenarTareas;


    /**
     * Crea una nueva instancia de `Aplicacion`.
     */
    constructor() {
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();

        this.creador = new CrearTarea();
        this.editor = new EditarTarea();

        this.contextoBusqueda = new BuscadorDeTarea(new BusquedaPorTitulo());
        this.actionBusqueda = "";
        this.contextoOrdenamiento = new OrdenarTareas(new OrdenarPorTitulo());

    }

    /**
     * Crea una nueva tarea.
     * @param {string} titulo - El título de la tarea.
     * @param {string} descripcion - La descripción de la tarea.
     * @param {number} fecha - La fecha de vencimiento de la tarea.
     * @param {Prioridad} prioridad - La prioridad de la tarea.
     * @param {string} categoria - La categoría de la tarea.
     * @param {string} etiqueta - La etiqueta de la tarea.
     * @returns {Tarea} - La nueva tarea creada.
     */
    public creardorT(titulo: string, descripcion: string, fecha: number, prioridad: Prioridad, categoria: string, etiqueta: string): Tarea {
        const nuevaTarea = this.creador.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta);
        return nuevaTarea;
    }

    /**
     * Agrega una nueva tarea a la lista de tareas.
     * @param {Tarea} nuevaTarea - La nueva tarea a agregar.
     */
    public agregarNuevaTarea(nuevaTarea: Tarea) {
        this.listaDeTareas.push(nuevaTarea);
    }

    /**
     * Edita una tarea en la lista de tareas.
     * @param {string} accion - La edicion a realizar
     * @param {ListaTarea} lista - La lista que contiene la tarea a editar
     * @param {Tarea} tarea - La tarea a editar.
     *
     * `acciones` es un mapa de funciones que asocia las acciones que el usuario puede realizar
     * (como editar el título, la descripción, etc.) con los métodos correspondientes en la clase `EditarTarea`.
     * 
     * - Se usa `Record` para definir que las claves son cadenas (acciones) y los valores son funciones que reciben
     *   una lista, una tarea, y un valor.
     * - Se usa `bind` para garantizar que las funciones de la clase `EditarTarea` mantengan su contexto
     *   original al ser llamadas.
    */
public editarTarea(accion: string, lista: ListaTarea, tarea: Tarea, valor: any): void {
    // Mapa de acciones disponibles
    const acciones: Record<string, (lista: ListaTarea, tarea: Tarea, valor: any) => void> = {
        titulo: this.editor.editarTitulo.bind(this.editor),
        descripcion: this.editor.editarDescripcion.bind(this.editor),
        fechavencimiento: this.editor.editarFechaVec.bind(this.editor),
        prioridad: this.editor.editarPrioridad.bind(this.editor),
        categoria: this.editor.editarCategoria.bind(this.editor),
        etiqueta: this.editor.editarEtiqueta.bind(this.editor),
        avance: this.editor.editarAvance.bind(this.editor),
    };

    // Normalizar la acción a minúsculas
    const accionNormalizada = accion.toLowerCase();

    // Ejecutar la acción correspondiente
    const accionEditar = acciones[accionNormalizada];
    if (accionEditar) {
        accionEditar(lista, tarea, valor);
    } else {
        throw new ValorNoEncontrado("El parametro seleccionado es invalido");
    }
}

    /**
     * Elimina una tarea de la lista de tareas.
     * @param {Tarea} tarea - La tarea a eliminar.
     * @returns {Tarea} - La tarea eliminada.
     */
    public eliminarUnaTarea(tarea: Tarea): Tarea {
        return this.listaDeTareas.delete(tarea);
    }

    /**
     * Obtiene la lista de tareas incompletas.
     * @returns {ListaTarea} - La lista de tareas incompletas.
     */
    public getListaDeTareasIncompletas(): ListaTarea {
        return this.listaDeTareas;
    }

    /**
     * Obtiene la lista de tareas completadas.
     * @returns {ListaTarea} - La lista de tareas completadas.
     */
    public getListaDeTareasCompletas(): ListaTarea {
        return this.listaDeTareasCompletadas;
    }

    /**
     * Carga las tareas completadas en la lista de tareas completadas.
     */
    public cargarTareasCompletas(): void {
        let tarea: Tarea;
        let listaAux = this.listaDeTareas;
        let listaAux2 = new ListaTarea();

        while (listaAux.getHead()) {
            tarea = listaAux.pop();
            if(tarea.getAvance() === 100){
                this.listaDeTareasCompletadas.insertOrderedFecha(tarea);
            } else {
                listaAux2.insertOrderedFecha(tarea);
            }
        }
        this.listaDeTareas = listaAux2;
        listaAux.clear();
        listaAux2.clear();
    }

    private decidirTipoBusqueda(actionBusqueda: string) {

        if (actionBusqueda === "Titulo" || actionBusqueda === "titulo") {
            this.contextoBusqueda.setEstrategia(new BusquedaPorTitulo());
        } else if (actionBusqueda === "Fecha" || actionBusqueda === "fecha") {
            this.contextoBusqueda.setEstrategia(new BusquedaPorFecha());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
        }
    }

    public setActionBusqueda(valor: string){
        this.actionBusqueda = valor;
    }

    public buscadorFunc(lista: ListaTarea, valor: objetoBusqueda): Tarea{
        this.decidirTipoBusqueda(this.actionBusqueda)
        let result = this.contextoBusqueda.buscar(lista, valor);
        return result;
    }

    private decidirTipoOrdenamiento(actionOrdenar: string) {

        if (actionOrdenar === "Titulo" || actionOrdenar === "titulo") {
           this.contextoOrdenamiento.setEstrategia(new OrdenarPorTitulo());
        } else if (actionOrdenar === "Fecha" || actionOrdenar === "fecha") {
            this.contextoOrdenamiento.setEstrategia(new OrdenarPorFecha());
        } else if (actionOrdenar === "Prioridad" || actionOrdenar === "prioridad") {
            this.contextoOrdenamiento.setEstrategia(new OrdenarPorPrioridad());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
        }
    }
    
    public ordenarFunc(lista: ListaTarea, actionOrdenar: string) {
        this.decidirTipoOrdenamiento(actionOrdenar);
        this.contextoOrdenamiento.ordenar(lista);
    }
}