import PropTypes from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {
    //     setInputValue(event.target.value);
    // };

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return;
        // setCategories( categories => [ ...categories, inputValue ] );
        onNewCategory(inputValue.trim().toLocaleLowerCase());
        setInputValue('');
    }

    return (
        // <div>Add Category</div>
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                className="animate__animated animate__backInRight"
                placeholder="Look for that amazing gif!"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};