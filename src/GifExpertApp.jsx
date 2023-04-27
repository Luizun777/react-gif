import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categoris, setCategoris] = useState(['One Punch']);

  const onAddCategory = (onNewCategory) => {
    if ( categoris.includes(onNewCategory)) return;
    setCategoris([onNewCategory, ...categoris]);
  };

  return (
    <>
    <h1>Expert Gif</h1>

    <AddCategory
      // setCategoris={ setCategoris }
      onNewCategory={ onAddCategory }
    />

    {
      categoris.map((categoty) => <GifGrid key={categoty} category={categoty}/>)
    }
    </>
  )
}
