import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Prueba 08-imp-exp',()=>{
    test('getHeroById Debe retornar un heroe por ID',()=>{
        const id=1;
        const hero = getHeroeById(id);
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' });
    })
    test('getHeroById Debe retornar undefined si no existe el heroe 100',()=>{
        const id=100;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner Debe retornar un arreglo con los heroes de DC',()=>{
        const heroArray = getHeroesByOwner("DC");
        expect(heroArray.length).toEqual(3);
        expect(heroArray).toEqual([{ id: 1, name: 'Batman', owner: 'DC' },
                                   { id: 3, name: 'Superman', owner: 'DC' },
                                   { id: 4, name: 'Flash', owner: 'DC' }]);
    })
    test('getHeroesByOwner Debe retornar un arreglo con los heroes de Marvel',()=>{
        const heroArray = getHeroesByOwner("Marvel");
        expect(heroArray.length).toEqual(2);
    })
})