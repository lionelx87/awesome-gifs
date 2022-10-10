import PropTypes from 'prop-types'
import { Fragment, useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GridGif = ({ category }) => {

    const { images, loading } = useFetchGifs( category );

    return (
        <Fragment>
            <h3>{category}</h3>
            {
                // loading ? (<h2>Cargando...</h2>) : null
                loading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifItem 
                            key={ img.id }
                            // image={ img }
                            // title={ img.title }
                            { ...img }
                        />
                    ))
                }
            </div>
        </Fragment>
    );
};

GridGif.propTypes = {
    category: PropTypes.string.isRequired
}