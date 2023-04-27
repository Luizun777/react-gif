import { useState } from "react"

export const AddCategory = ({ setCategoris, onNewCategory }) => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputClean = inputValue.trim();
    if (inputClean.length <= 1) return;
    // setCategoris(c => [inputValue, ...c]);
    onNewCategory(inputClean);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        // onChange={(event) => onInputChange(event)}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
