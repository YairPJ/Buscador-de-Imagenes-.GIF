import React, { useEffect, useState } from 'react'
//import { getGif } from '../helpers/getGif';
import { useFetchGigs } from '../hooks/useFetchGigs';
import { GifItem } from './GifItem';


export const GfiGrid = ({category}) => {

  const {images, isLoading} = useFetchGigs(category);
 
   

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading                                   //ESTO ES PARA QUE EL isLoading solamente aparezca mientras sea true
          ? (<h2 className="loading">Cargando...</h2>)
          : null
        }

        <div className="card-grid">
          {
            images.map((image) => (
              <GifItem 
              key={image.id}
              {...image}
              
              />
            ))
          }
        </div>
    </>
  )
}


