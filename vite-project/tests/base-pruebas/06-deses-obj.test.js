import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Test 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const user = {
      nombreClave: "Carlos",
      anios: 2,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const testUser = usContext({
        clave: "Carlos",
        edad: 2
    });

    expect(testUser).toStrictEqual(user);
  });
});
