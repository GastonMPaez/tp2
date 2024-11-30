import Tarea from "../src/clases/Tarea";
import { Prioridad } from "../src/Enum/Prioridad";

describe("Test de la clase Tarea.ts", ()=>{

    let tarea:Tarea;

    beforeEach(() => {
        tarea = new Tarea("Titulo1","Descripcion1",20201010,Prioridad.BAJA,"Categoria1","Etiqueta1");
    });

    //test de los gets
    test('Pruebo la funcion de getTitulo(), deberia devolver el titulo establecido', ()=>{
        expect(tarea.getTitulo()).toBe("Titulo1");
    });
    
    test('Pruebo la funcion de getDescripcion(), deberia devolver la descripcion establecida', ()=>{
        expect(tarea.getDescripcion()).toBe("Descripcion1");
    });

    test('Pruebo la funcion de getFecha(), deberia devolver la fecha establecida', ()=>{
        expect(tarea.getFechaVec()).toBe(20201010);
    });

    test('Pruebo la funcion de getPrioridad(), deberia devolver la prioridad establecida', ()=>{
        expect(tarea.getPrioridad()).toBe(2);
    });
    
    test('Pruebo la funcion de getCategoria(), deberia devolver la categoria establecida', ()=>{
        expect(tarea.getCategoria()).toBe("Categoria1");
    });
    
    test('Pruebo la funcion de getEtiqueta(), deberia devolver la etiqueta establecida', ()=>{
        expect(tarea.getEtiqueta()).toBe("Etiqueta1");
    });
    
    test('Pruebo la funcion de getAvance(), deberia devolver el avance establecida', ()=>{
        expect(tarea.getAvance()).toBe(0);
    });

    //test de los sets
    test('Pruebo la funcion de setTitulo(), deberia cambiar el titulo establecido', ()=>{
        tarea.setTitulo("Recital Teatro");
        expect(tarea.getTitulo()).toBe("Recital Teatro");
    });
    
    test('Pruebo la funcion de setDescripcion(), deberia cambiar la descripcion establecida', ()=>{
        tarea.setDescripcion("precensiar los fuegos artificiales");
        expect(tarea.getDescripcion()).toBe("precensiar los fuegos artificiales");
    });

    test('Pruebo la funcion de setFecha(), deberia cambiar la fecha establecida', ()=>{
        tarea.setFechaVec(19450809);
        expect(tarea.getFechaVec()).toBe(19450809);
    });

    test('Pruebo la funcion de setPrioridad(), deberia cambiar la prioridad establecida', ()=>{
        tarea.setPrioridad(0);
        expect(tarea.getPrioridad()).toBe(Prioridad.ALTA);
    });
    
    test('Pruebo la funcion de setCategoria(), deberia cambiar la categoria establecida', ()=>{
        tarea.setCategoria("Diversion");
        expect(tarea.getCategoria()).toBe("Diversion");
    });
    
    test('Pruebo la funcion de setEtiqueta(), deberia cambiar la etiqueta establecida', ()=>{
        tarea.setEtiqueta("Fiesta");
        expect(tarea.getEtiqueta()).toBe("Fiesta");
    });
    
    test('Pruebo la funcion de setAvance(), deberia cambiar el avance establecida', ()=>{
        tarea.setAvance(75);
        expect(tarea.getAvance()).toBe(75);
    });
    
});