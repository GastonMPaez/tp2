import moment from "moment";
import ConvertirFecha from "../src/clases/auxiliar/formatearFecha";
import ValorNoEncontrado from "../src/excepciones/error";

describe("Test de la clase formatearFecha.ts", ()=>{

    let formateo: ConvertirFecha;
    let fecha:number


    beforeEach(()=>{
        formateo = new ConvertirFecha()
        fecha = 19390901;
    });


    test('Probamos el cambio de la fecha a formato DD/MM/YYYY', ()=>{
        console.log(`Antes del formateo: ${fecha}\nDespues del formateo: ${formateo.convertirFecha(fecha).format('DD/MM/YYYY')}`);
    });

    test('Probamos una fecha incorrecta', () => {
        fecha = 20241552;
        try {
            formateo.convertirFecha(fecha);
        } catch (error) {
            expect(error).toBeInstanceOf(ValorNoEncontrado); 
            expect(error.message).toBe("Fecha Incorrecta");
        }
    });
    
});