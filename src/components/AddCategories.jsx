import { Component, useState } from 'react';


export const AddCategories = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState()

    const onInputChange = () =>{
   
        setInputValue( event.target.value );
        
      
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        //setCategories( categories => [inputValue, ...categories]) -> Esta es para la otra forma

        onNewCategory( inputValue.trim());

        setInputValue('');

    }

  return (
      <form onSubmit={ (event) => onSubmit(event) }>
        
    <input 
    type = "text"
    placeholder = "Agregar Categoria Nueva"
    value={inputValue}
    onChange = { onInputChange }
    />
    </form>
  )
}

