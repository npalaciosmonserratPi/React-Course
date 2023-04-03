import { getByText, render, screen} from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 

    const title = 'Hola, soy un titulo';
    const subTitle = "Hola, soy un subtitulo";

    test('debe hacer match con el snapshot',()=>{

        const {container} = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje "Hola, soy un titulo"', ()=>{

        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();

    })

    test('debe de mostrar el título en un h1', ()=>{
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
    })

    test('Verificar que existen los props del subtitulo', ()=>{
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getByText("Hola, soy un subtitulo").innerHTML).toContain(subTitle);
        screen.debug();
    })

})