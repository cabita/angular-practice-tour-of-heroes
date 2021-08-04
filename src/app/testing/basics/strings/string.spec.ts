import { mensaje } from "./string"

describe( 'Pruebas de strings', () => {

    it( 'Debe regresar un string', () => {

        const resp = mensaje('Alexa');

        expect( typeof resp ).toBe('string');

    });

    it( 'Debe retornar un saludo con el nombre enviado', () => {

        const name = 'Alexa';
        const resp = mensaje(name);

        expect( resp ).toContain( name );

    })




})