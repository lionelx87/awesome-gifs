import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages ); // Esto solo dispara
        setLoading(false); // una renderización
    };

    useEffect( () => {
        getImages();
    }, []);

  return {
      images,
      loading
  }
}
