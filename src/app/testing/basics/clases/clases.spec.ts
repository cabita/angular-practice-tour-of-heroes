import { Jugador } from "./clases"

describe( 'Pruebas de clase', () => {
    
    let jugador = new Jugador();

    beforeAll( () => {
        //console.log('beforeAll');
    });
    beforeEach( () => {
        //jugador.hp = 100;
        jugador = new Jugador();
        
        //console.log('beforeEach');
    });
    afterAll( () => {
        //console.log('afterAll');
    });
    afterEach( () => {
        //console.log('afterEach');
    });


    it( 'Debe retornar 80 de hp, si recibe 20 de daño', () => {

        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);
    });

    it( 'Debe retornar 50 de hp, si recibe 50 de daño', () => {

        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });

    it( 'Debe retornar 0 de hp, si recibe mas  de 100 de daño', () => {

        const resp = jugador.recibeDanio(120);

        expect(resp).toBe(0);
    });


})