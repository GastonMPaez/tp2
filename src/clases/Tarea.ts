import { Prioridad } from "../Enum/Prioridad";

/**
 * Clase `Tarea` que representa una tarea con varios atributos como título, descripción, fecha de vencimiento, prioridad, categoría, etiqueta y avance.
 */
export default class Tarea {

    private titulo: string;
    private descripcion: string;
    private fechaVec: number;
    private prioridad: Prioridad;
    private categoria: string;
    private etiqueta: string;
    private avance: number;
    
    /**
     * Crea una nueva instancia de `Tarea`.
     * @param {string} titulo - El título de la tarea.
     * @param {string} desc - La descripción de la tarea.
     * @param {number} fechaVec - La fecha de vencimiento de la tarea.
     * @param {Prioridad} prioridad - La prioridad de la tarea.
     * @param {string} cat - La categoría de la tarea.
     * @param {string} etiqueta - La etiqueta de la tarea.
     */
    constructor(titulo: string, desc: string, fechaVec: number, prioridad: Prioridad, cat: string, etiqueta: string) {
        this.titulo = titulo;
        this.descripcion = desc;
        this.fechaVec = fechaVec;
        this.prioridad = prioridad;
        this.categoria = cat;
        this.etiqueta = etiqueta;
        this.avance = 0;
    }

    /**
     * Obtiene el título de la tarea.
     * @returns {string} El título de la tarea.
     */
    public getTitulo(): string{
        return this.titulo;
    }

    /**
     * Establece el título de la tarea.
     * @param {string} valor - El nuevo título de la tarea.
     */
    public setTitulo(valor: string) {
        this.titulo = valor;
    }
    
    /**
     * Obtiene la descripción de la tarea.
     * @returns {string} La descripción de la tarea.
     */
    public getDescripcion(): string {
        return this.descripcion;
    }

    /**
     * Establece la descripción de la tarea.
     * @param {string} valor - La nueva descripción de la tarea.
     */
    public setDescripcion(valor: string) {
        this.descripcion = valor;
    }

    /**
     * Obtiene la fecha de vencimiento de la tarea.
     * @returns {number} La fecha de vencimiento de la tarea.
     */
    public getFechaVec(): number {
        return this.fechaVec;
    }

    /**
     * Establece la fecha de vencimiento de la tarea.
     * @param {number} valor - La nueva fecha de vencimiento de la tarea.
     */
    public setFechaVec(valor: number) {
        this.fechaVec = valor;
    }

    /**
     * Obtiene la prioridad de la tarea.
     * @returns {Prioridad} La prioridad de la tarea.
     */
    public getPrioridad(): Prioridad {
        return this.prioridad;
    }

    /**
     * Establece la prioridad de la tarea.
     * @param {Prioridad} valor - La nueva prioridad de la tarea.
     */
    public setPrioridad(valor: Prioridad) {
        this.prioridad = valor;
    }

    /**
     * Obtiene la categoría de la tarea.
     * @returns {string} La categoría de la tarea.
     */
    public getCategoria(): string {
        return this.categoria;
    }

    /**
     * Establece la categoría de la tarea.
     * @param {string} valor - La nueva categoría de la tarea.
     */
    public setCategoria(valor: string) {
        this.categoria = valor;
    }

    /**
     * Obtiene la etiqueta de la tarea.
     * @returns {string} La etiqueta de la tarea.
     */
    public getEtiqueta(): string {
        return this.etiqueta;
    }

    /**
     * Establece la etiqueta de la tarea.
     * @param {string} valor - La nueva etiqueta de la tarea.
     */
    public setEtiqueta(valor: string) {
        this.etiqueta = valor;
    }

    /**
     * Obtiene el avance de la tarea.
     * @returns {number} El avance de la tarea.
     */
    public getAvance(): number {
        return this.avance;
    }

    /**
     * Establece el avance de la tarea.
     * @param {number} valor - El nuevo avance de la tarea.
     */
    public setAvance(valor: number) {
        this.avance = valor;
    }

}