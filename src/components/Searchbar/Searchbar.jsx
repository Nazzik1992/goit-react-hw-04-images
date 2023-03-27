import { useState } from 'react';
import style from 'components/Styles.module.css';

export const Searchbar = ({onSubmit}) => {

  const [query, setQuery] = useState('')
  

  const handleSearch = elem => {
    setQuery(elem.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Please enter a search something');
    }
    onSubmit(query);
  };

    return (
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          <button type='submit' className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}></span>
          </button>
          <input
               value={query}
               onChange={handleSearch}
               type="text"
               autocomplete="off"
               className={style.SearchFormInput}
               placeholder="Search images and photos">
            
          </input>
        </form>
      </header>
    );
  }

