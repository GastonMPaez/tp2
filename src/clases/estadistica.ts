import ListaTarea from "../Listas/ListaTarea";

/** * Clase `Estadistica` que proporciona métodos para calcular estadísticas sobre las tareas. */
export default class Estadistica {
    /** * Calcula el porcentaje de tareas completadas en base a las listas de tareas incompletas y completadas. 
    * @param {ListaTarea} listaIncompleta - La lista de tareas incompletas.
    * @param {ListaTarea} listaCompleta - La lista de tareas completadas.
    * @returns {number} - El porcentaje de tareas completadas. */
    public getPorcentajeTareasCompletada(listaIncompleta: ListaTarea, listaCompleta: ListaTarea): number{
        let cantidadIncompletas = 0;
        let cantidadCompletas = 0;

        let auxHeadIncompleta = listaIncompleta.getHead();
        let auxHeadCompleta = listaIncompleta.getHead();

        while(auxHeadIncompleta) {
            cantidadIncompletas++;
            auxHeadIncompleta = auxHeadIncompleta.next;
        }

        while(auxHeadCompleta) {
            cantidadCompletas++;
            auxHeadCompleta = auxHeadCompleta.next;
        }

        return (cantidadCompletas / (cantidadIncompletas + cantidadCompletas))*100;
    }
}