import { fireEvent, render, screen } from "@testing-library/react";
import { AwesomeGifs } from "../AwesomeGifs";


describe('Test in AwesomeGifs', () => {
    
    test('Should change the value of the input ', () => {
        render(<AwesomeGifs />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'react' } });

        expect( input.value ).toBe('react');
    });

    test('Should add a new category', () => {
        render(<AwesomeGifs />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : 'react' } });
        fireEvent.submit(form);

        expect( screen.findByText(input.value)).toBeTruthy();

    });

    test('Should avoid adding the same category more than once.', async() => {
        render(<AwesomeGifs />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : 'react' } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value : 'react' } });
        fireEvent.submit(form);

        const items = screen.getAllByRole('heading', { level: 3 });

        expect( items.length ).toHaveLength(1);

    });

});