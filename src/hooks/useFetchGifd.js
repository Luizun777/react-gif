import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifd = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImagesList = await getGifs(category);
    setImages(newImagesList);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

   return {
    images,
    isLoading
   }
}
