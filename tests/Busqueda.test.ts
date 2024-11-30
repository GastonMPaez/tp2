import { mock } from 'jest-mock-extended'
import { Prioridad } from '../src/Enum/Prioridad';
import BuscadorDeTarea from '../src/clases/auxiliar/busqueda/buscadarDeTarea';
import BusquedaPorTitulo from '../src/clases/auxiliar/busqueda/busquedaPorTitulo';
import BusquedaPorFecha from '../src/clases/auxiliar/busqueda/busquedaPorFec';
import Tarea from '../src/clases/Tarea';
import ListaTarea from '../src/Listas/ListaTarea';
import { objetoBusqueda } from '../src/clases/interfaces/objetoBusqueda';
import ConvertirFecha from '../src/clases/auxiliar/formatearFecha';
import ValorNoEncontrado from '../src/excepciones/error';



describe('BuscadorDeTarea Strategy Pattern', () => {

    let contexto: BuscadorDeTarea;
    let action: string;
    
    let valor:objetoBusqueda

    let mockTarea1 = mock<Tarea>();
    let mockTarea2 = mock<Tarea>();
    let mockTarea3 = mock<Tarea>();
    let mockTarea4 = mock<Tarea>();
    
    let lista = new ListaTarea();

    function cargarTareas(): void {
        mockTarea1.getTitulo.mockImplementation(()=>"Titulo11")
        mockTarea1.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea1.getFechaVec.mockImplementation(()=>11111111);
        mockTarea1.getPrioridad.mockImplementation(()=>Prioridad.ALTA);
        mockTarea1.getCategoria.mockImplementation(()=>"Categoria 111");
        mockTarea1.getEtiqueta.mockImplementation(()=>"Etiqueta 111");
        mockTarea1.getAvance.mockImplementation(()=>0);

        mockTarea2.getTitulo.mockImplementation(()=>"Titulo2");
        mockTarea2.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea2.getFechaVec.mockImplementation(()=>20201010);
        mockTarea2.getPrioridad.mockImplementation(()=>Prioridad.MEDIA);
        mockTarea2.getCategoria.mockImplementation(()=>"Categoria Prueba");
        mockTarea2.getEtiqueta.mockImplementation(()=>"Etiqueta Prueba");
        mockTarea2.getAvance.mockImplementation(()=>0);

        mockTarea3.getTitulo.mockImplementation(()=>"Comprar Pan");
        mockTarea3.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea3.getFechaVec.mockImplementation(()=>20241113);
        mockTarea3.getPrioridad.mockImplementation(()=>Prioridad.BAJA);
        mockTarea3.getCategoria.mockImplementation(()=>"Categoria Prueba");
        mockTarea3.getEtiqueta.mockImplementation(()=>"Etiqueta Prueba");
        mockTarea3.getAvance.mockImplementation(()=>0);

        mockTarea4.getTitulo.mockImplementation(()=>"Comprar Zapatillas");
        mockTarea4.getDescripcion.mockImplementation(()=>"Descripcion Prueba");
        mockTarea4.getFechaVec.mockImplementation(()=>20141215);
        mockTarea4.getPrioridad.mockImplementation(()=>Prioridad.BAJA);
        mockTarea4.getCategoria.mockImplementation(()=>"Categoria Prueba");
        mockTarea4.getEtiqueta.mockImplementation(()=>"Etiqueta Prueba");
        mockTarea4.getAvance.mockImplementation(()=>0);
    }
    
    function toString(tarea: Tarea) {
        const fechaM: ConvertirFecha = new ConvertirFecha();
        return `Tarea: ${tarea.getTitulo()},\nDescripcion: ${tarea.getDescripcion()},\nFecha: ${fechaM.convertirFecha(tarea.getFechaVec()).format('DD/MM/YYYY')},\nCategoria: ${tarea.getCategoria()},\nEtiqueta: ${tarea.getEtiqueta()},\nPrioridad: ${Prioridad[tarea.getPrioridad()]},\nAvance: ${tarea.getAvance()}`;
        }

    function setAction(valor: string) {
        action = valor;
    }

    function decidirTipo(action: string) {

        if (action === "Titulo" || action === "titulo") {
           contexto.setEstrategia(new BusquedaPorTitulo());
        } else if (action === "Fecha" || action === "fecha") {
            contexto.setEstrategia(new BusquedaPorFecha());
        } else {
            console.log("OPCION NO VALIDA");
            return;
        }
    }


    beforeEach(() => {
        contexto = new BuscadorDeTarea(new BusquedaPorTitulo());
        
        cargarTareas();
    });

    test('Buscar por titulo correctamente', () => {

        lista.push(mockTarea1);
        lista.push(mockTarea2);
        lista.push(mockTarea3);
        lista.push(mockTarea4);

        setAction("Titulo");

        decidirTipo(action);

        valor = {titulo:"Comprar Zapatillas"};

        let result = contexto.buscar(lista, valor);
        
        expect(result).toBe(mockTarea4);
        
        console.log(toString(result));
    });


    test('Buscar por fecha correctamente', () => {

        lista.push(mockTarea1);
        lista.push(mockTarea2);
        lista.push(mockTarea3);
        lista.push(mockTarea4);

        setAction("Fecha");

        decidirTipo(action);

        valor = {fecha:20201010};

        let result = contexto.buscar(lista, valor);

        expect(result).toBe(mockTarea2);
        
        console.log(toString(result));
    });

    test('Buscar por titulo fallida', () => {

        lista.push(mockTarea1);
        lista.push(mockTarea2);
        lista.push(mockTarea3);
        lista.push(mockTarea4);

        setAction("Titulo");

        decidirTipo(action);

        valor = {titulo:"tarea24"};
        try{
            let result = contexto.buscar(lista, valor);
        }catch(error){
            expect(error).toBeInstanceOf(ValorNoEncontrado);
        }
    });


    test('Buscar por fecha fallida', () => {

        lista.push(mockTarea1);
        lista.push(mockTarea2);
        lista.push(mockTarea3);
        lista.push(mockTarea4);

        setAction("Fecha");

        decidirTipo(action);

        valor = {fecha:55551222};

        try{
            let result = contexto.buscar(lista, valor);
        }catch(error){
            expect(error).toBeInstanceOf(ValorNoEncontrado);
        }
    });

});
