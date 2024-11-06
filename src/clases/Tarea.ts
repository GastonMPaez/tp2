import { Prioridad } from "../Enum/Prioridad";

export default class Tarea{

    private titulo:string;
    private descripcion:string;
    private fechaVec:Date;
    private prioridad:Prioridad;
    private categoria:string;
    private etiqueta:string;
    private avance:number;
    
    constructor(titulo:string, desc:string, fechaVec:Date, prioridad:Prioridad, cat:string, etiqueta:string, avance:number){
        this.titulo=titulo;
        this.descripcion=desc;
        this.fechaVec=fechaVec;
        this.prioridad = prioridad;
        this.categoria = cat;
        this.etiqueta = etiqueta;
        this.avance = avance;
    }

    public getTitulo(): string{
        return this.titulo;
    }

    public setTitulo(valor:string){
        this.titulo=valor;
    }
    
    public getDescripcion():string {
        return this.descripcion;
    }

    public setDescripcion(valor: string){
        this.descripcion = valor;
    }
    
    public getFechaVec():Date {
        return this.fechaVec;
    }

    public setFechaVec(valor: Date){
        this.fechaVec = valor;
    }

    public getPrioridad():Prioridad {
        return this.prioridad;
    }

    public setPrioridad(valor: Prioridad){
        this.prioridad = valor;
    }

    public getCategoria():string {
        return this.categoria;
    }

    public setCategoria(valor: string){
        this.categoria = valor;
    }

    public getEtiqueta():string {
        return this.etiqueta;
    }

    public setEtiqueta(valor: string){
        this.etiqueta = valor;
    }

    public getAvance():number {
        return this.avance;
    }

    public setAvance(valor: number){
        this.avance = valor;
    }

}