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
        const onNewCategory = jest.fn();


        // render(<AddCategory onNewCategory={ () => {} } />);
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );

        fireEvent.submit( form );

        // Como el input esta creado por referencia, siempre podemos consultar el valor actualizado
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled(); // Verifica si la función fue llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // Verifica si la función fue llamada una sola vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue.trim().toLocaleLowerCase() );

        // screen.debug();

    });

    test('Should not call onNewCategory if the input is empty. ', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });

});