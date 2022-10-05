import { Fragment, useState } from "react";
import { AddCategory, GridGif } from './components'
// import { AddCategory } from './components/AddCategory'
// import { GridGif } from "./components/GridGif";

export const AwesomeGifs = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // categories.push('Caballeros del Zodiaco'); // React intenta evitar la mutación, y el push intenta justamente mutar el objeto
        // const newCategories = [ ...categories, 'Caballeros del Zodiaco' ];
        // setCategories( newCategories );
        if( categories.includes(newCategory) ) return;
        setCategories( categories => [ newCategory, ...categories ] );
    };

    return (
        <Fragment>
            <h1 className="animate__animated animate__backInLeft">Awesome Gifs</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {/* <button onClick={ onAddCategory }>ADD</button> */}

                {
                    // categories.map( category => {
                    //     return <li key={ category }>{ category }</li>
                    // })
                    categories.map( category => (
                        <GridGif 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
        </Fragment>
    )
};