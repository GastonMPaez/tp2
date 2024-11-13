import { mock } from 'jest-mock-extended'
import { Prioridad } from '../src/Enum/Prioridad';
import BuscadorDeTarea from '../src/clases/auxiliar/busqueda/buscadarDeTarea';
import BusquedaPorTitulo from '../src/clases/auxiliar/busqueda/BusquedaPorTitulo';
import BusquedaPorFecha from '../src/clases/auxiliar/busqueda/busquedaPorFec';
import Tarea from '../src/clases/Tarea'; // Asegúrate de que la clase Tarea esté correctamente definida
import ListaTarea from '../src/Listas/ListaTarea';



describe('BuscadorDeTarea Strategy Pattern', () => {

    function cargarTareas(): void {
        mockTarea1.setTitulo("Titulo11");
        mockTarea1.setDescripcion("Descripcion Prueba");
        mockTarea1.setFechaVec(11111111);
        mockTarea1.setPrioridad(Prioridad.ALTA);
        mockTarea1.setCategoria("Categoria 111");
        mockTarea1.setEtiqueta("Etiqueta 111");

        mockTarea2.setTitulo("Titulo2 Prueba");
        mockTarea2.setDescripcion("Descripcion Prueba");
        mockTarea2.setFechaVec(20201010);
        mockTarea2.setPrioridad(Prioridad.MEDIA);
        mockTarea2.setCategoria("Categoria Prueba");
        mockTarea2.setEtiqueta("Etiqueta Prueba");

        mockTarea3.setTitulo("Comprar Pan");
        mockTarea3.setDescripcion("Descripcion Prueba");
        mockTarea3.setFechaVec(20241113);
        mockTarea3.setPrioridad(Prioridad.BAJA);
        mockTarea3.setCategoria("Categoria Prueba");
        mockTarea3.setEtiqueta("Etiqueta Prueba");
    }

    function setAction(valor: string) {
        action = valor;
    }

    function decidirTipo(action: string) {

        if (action === "Titulo") {
           contexto.setEstrategia(new BusquedaPorTitulo());
        } else if (action === "Fecha") {
            contexto.setEstrategia(new BusquedaPorFecha());
        } else {
            console.log("OPCION NO VALIDA");
            return;
        }
    }

    let contexto: BuscadorDeTarea;
    let action: string;

    let mockLista = mock<ListaTarea>();
    let mockTarea1 = mock<Tarea>();
    let mockTarea2 = mock<Tarea>();
    let mockTarea3 = mock<Tarea>();

    let tarea = new Tarea("Titulo1","Descripcion Prueba",20241015,Prioridad.BAJA,"Categoria Prueba","Etiqueta Prueba");
    let lista = new ListaTarea();

    beforeEach(() => {
        contexto = new BuscadorDeTarea(new BusquedaPorTitulo());
    });

    test('Debe buscar por título correctamente', () => {

        cargarTareas();
        lista.push(mockTarea1);
        lista.push(mockTarea2);
        lista.push(tarea);
        lista.push(mockTarea3);

        mockLista.push(mockTarea1);
        mockLista.push(mockTarea2);
        mockLista.push(tarea);
        mockLista.push(mockTarea3);

        setAction("Titulo");
        decidirTipo(action);
        const result = contexto.buscar(lista, "Titulo11");
        
        console.log(result);
    });

});

/* 
    private contextBusq = new BuscadorDeTarea();
  
    const actionBusq: string;

    public setAction(valor:string){
        this.actionBusq = valor;
    }

    public busQ(){
        if (this.actionBusq === "Titulo"){
            this.contextBusq.setEstrategia(new BusquedaPorTitulo());
        } else if (this.actionBusq === "Fecha"){
            this.contextBusq.setEstrategia(new BusquedaPorFecha());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
            return;
        }
    }
    
    const result = this.contextBusq.buscar(lista, "Titulo1");
*/
