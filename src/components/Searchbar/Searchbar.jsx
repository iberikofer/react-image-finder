import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) {
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <h1 className={css.srOnly}>React Image Finder</h1>
      <form className={css.searchForm} onSubmit={handleSubmit} role="search">
        <button
          type="submit"
          className={css.searchFormButton}
          aria-label="Search images"
        >
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          name="queryInput"
          className={css.searchFormInput}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          aria-label="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
