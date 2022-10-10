import { render, screen } from "@testing-library/react";
import { GridGif } from "../../components/GridGif";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Test in GridGif', () => {

    const category  = "dragon ball";

    test('Should show loading at startup', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        });

        render(<GridGif category={ category } />);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('Should display items when loading images from useFetchGifs ', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: 'ABC2',
                title: 'Goku2',
                url: 'https://localhost/goku2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false
        });

        render(<GridGif category={ category } />);
        // screen.debug();

        expect( screen.getAllByRole('img').length).toBe(2);

    });

});