import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test en 07-deses-arr',()=>{
    test('Debe de retornar un string y un numero', () => { 
        const [letters, numbers]= retornaArreglo();

        expect(letters).toBe("ABC");

        expect(typeof letters).toBe('string');

        expect(typeof letters).toStrictEqual(expect.any(String));


    })
})