//Titulo de la prueba, callback de la prueba para saber si la prueba pasa o no

describe("Test <DemoComponent />", () => {

  test("Esta prueba no debe fallar", () => {
    
    //Inicializacion
    
    const message1 = "hola mundo";

    //Estimulo
    
    const message2 = message1.trim();

    //Aserciones, observar el comportamiento esperado
    
    expect(message1).toBe(message2); //Mensajes iguales  expect(received).toBe(expected)
    
    //Esperaba que mensaje 1 sea igual a mensaje 2
  
    });

});
