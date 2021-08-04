import { getRobots } from "./arrays"

describe('Pruebas con arrays', () => {

    it('Debe retornar al menos 3 robots', () => {

        const res = getRobots();

        expect (res.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe contener Megaman y Ultron', () => {

        const res = getRobots();

        expect (res).toContain('MegaMan');
        expect (res).toContain('Ultron');

    })

})