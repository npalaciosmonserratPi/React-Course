import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 

    //  test('Debe de hacer match con el snapshot', () => { 
        
    //       const {container} = render( <FirstApp title="Hola, soy Nahuel"/> )

    //       expect(container).toMatchSnapshot();
        
    //   })


    // test('debe mostrar el mismo título', () =>{
    //     const title = "Hola, soy Nahuel";
    //     const {container, getByText}  = render( <FirstApp title="Hola, soy Nahuel"/> )
        
    //     const h1 = container.querySelector('h1');
        
    //     expect(getByText(title)).toBeTruthy();
    // })

    test('debe mostrar el titulo en un h1', ()=>{
        const title = "Hola, soy Nahuel";
        const {getByTestId}  = render( <FirstApp title="Hola, soy Nahuel"/> )
        
        
        expect(getByTestId("test-title").innerHTML).toBe(title);
        
        // const h1 = container.querySelector('h1');
        
        // expect(h1.innerHTML).toContain(title);
    })

    test('debe mostrar elsubtitulo enviado por props', ()=>{
        const subTitle = "Hola, soy un subtítulo";
        const {getAllByText}  = render( <FirstApp subTitle={subTitle}/> )
        
        
        expect(getAllByText(subTitle).length).toBe(3);

        
        // const h1 = container.querySelector('h1');
        
        // expect(h1.innerHTML).toContain(title);
    })



})