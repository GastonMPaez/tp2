import ListaTarea from "../Listas/ListaTarea";
/**
 * @property 
 * interfaz de lectura
 */
export interface iLeerJSON{
    listaTareasIncompleta(): Promise<ListaTarea>;
    listaTareasCompleta(): Promise<ListaTarea>;
}