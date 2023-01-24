

import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif';

export const useFetchGigs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
  
    const getImages = async() =>{
      const newImage = await getGif(category);
      setImages(newImage);
      setisLoading(false);
     
    }

    useEffect (() => {
      getImages();
      

    }, [])
  
  return{
      images,
      isLoading
  }
}
