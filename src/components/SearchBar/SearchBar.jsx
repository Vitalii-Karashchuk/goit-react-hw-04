import css from '../SearchBar/SearchBar.module.css';
import { useRef } from 'react';
import toast from 'react-hot-toast';
//
export default function SearchBar({ onSubmit }) {
  const inputRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const inputData = inputRef.current.value;

    if (inputData === '') {
      return toast.error('Please enter a valid search term.');
    }

    if (inputData.trim()) {
      onSubmit(inputData);

      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <header>
        <form className={css.inputSearch} onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}
