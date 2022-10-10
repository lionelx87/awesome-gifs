import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Test in useFetchGifs', () => {
    
    test('Should return to the initial state', () => {
        // useFetchGifs(); // No funciona porque necesita parte de los ciclos de vida de React
         const { result } = renderHook( () => useFetchGifs('Dragon ball') );
        //  console.log(result);
        const { images, loading } = result.current;
        expect( images.length ).toBe(0);
        expect( loading ).toBeTruthy();
    });
    
    test('Should return an array of images and loading set to false.', async() => {
        const { result } = renderHook( () => useFetchGifs('Dragon ball') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 10000
            }
        );

        const { images, loading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();

    });

});