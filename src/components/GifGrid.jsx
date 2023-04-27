import { GifGridItem } from "./GifGridItem";
import { useFetchGifd } from "../hooks/useFetchGifd";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifd(category);

  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>Cargando...</h2>)
    }
    {
      (images.length === 0 && !isLoading) && (<h2>No existe</h2>)
    }
    <div className="card-grid">
      { images.map((image) => <GifGridItem { ...image } key={image.id}/>) }
    </div>
    </>
  )
}
