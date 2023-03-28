import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    getHeroeByIdAsync(1).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si heroe no existe", (done) => {
    getHeroeByIdAsync(1000).catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe 1000`);
        done();
    });
  });
});
