import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onSelect }) => {
  const handleClick = () => {
    onSelect(image);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(image);
    }
  };

  return (
    <li className={css.imageGalleryItem}>
      <div
        role="button"
        tabIndex={0}
        className={css.cardButton}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={`View full-size photo: ${image.tags || 'photo'}`}
      >
        <img
          src={image.webformatURL}
          alt={image.tags || 'Search result photo'}
          className={css.imageGalleryItemImage}
          loading="lazy"
        />
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
