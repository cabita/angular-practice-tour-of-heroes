import { increment } from "./numeros"

describe('Pruebas de numeros', () => {

    it('Debe retornar 100, si el número ingresado es mayor a 100', () => {

        const res = increment(300);
        expect (res).toBe(100);

    });

    it('Debe retornar numero + 1, si el número ingresado es menor a 100', () => {

        const res = increment(90);
        expect (res).toBe(91);

    });

})