import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem';


describe('Test in GifItem', () => {

    const title = "title";
    const url = "https://dragon-ball.jpg/";

    test('Should match the snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Should display a valid url and alt attribute', () => {
        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Should display the title in the component', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});