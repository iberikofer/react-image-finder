import axios from 'axios';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ addImages, onError, saveQuery }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    const inputValue = e.target.elements.queryInput.value.trim();
    if (inputValue) {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${inputValue}&page=1&key=37196317-2c59749f8d103970cbe5890ed&image_type=photo&orientation=horizontal&per_page=12`
        );
        const options = response.data.hits.map(image => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        }));
        addImages(options);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        onError(error);
      } finally {
        saveQuery(inputValue);
        e.target.reset();
      }
    } else {
      console.log('Your search field must not be empty!');
    }
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          name="queryInput"
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  addImages: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  saveQuery: PropTypes.func.isRequired,
};

export default Searchbar;
