import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test in AddCategory', () => {
    
    test('Should change the value of the text box', () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Lionel' } } );

        expect( input.value ).toBe('Lionel');

        // screen.debug();
    });

    test('Should call onNewCategory if the input has a value of', () => {
        
        const inputValue = 'Lionel';

        //TODO

        render(<AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );

        fireEvent.submit( form );

        // Como el input esta creado por referencia, siempre podemos consultar el valor actualizado
        expect( input.value ).toBe('');

        // screen.debug();



    });

});