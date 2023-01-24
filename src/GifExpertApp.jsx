import React, { useState } from "react";
import { AddCategories, GfiGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) =>{

        if (categories.includes(newCategory)){   /* Esta funcion es para consultar si la categoria ya existe o no */
            return;
        }

        setCategories( [ newCategory,...categories] )     /* EL ...categories es para crear una copia de todas las categorias antiguas y agregar otra */ 
        /* aqui se modifico para que solo mostrara una categoria, si quieres que las muestre todas agrega ...categories para que regrese las categorias anteriores */

        
    }



    return(
        <>
        {/* TITULO DE LA APLICACION */}
            <h1>Buscador de .GIF</h1>

            {/* INPUT (EN ALGUN COMPONENTE INDEPENDIENTE) */}
            
            <AddCategories 
            //setCategories={ setCategories } -> ESTA FORMA NO ES RECOMENDABLE

            onNewCategory={ (value) => onAddCategory(value)}   /*Se puede utilizar el event con event => {onAddCategor} */

            
            />
            
            

            {/* LISTADO DE .GIF */}
            
                { 
                categories.map( category => 
                     (
                    <GfiGrid key={category} category={category}/>
                    )) 
                }
        </>
    ) 
}

