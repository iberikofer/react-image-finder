import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, image, state, openModal }) => {
  const handleClickedPhoto = () => {
    const modalImageUrl = state.images.find(image => image.id === id);
    openModal(modalImageUrl);
  };

  return (
    <div className={css.imageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={'Tags:' + image.tags}
        className={css.imageGalleryItemImage}
        id={id}
        onClick={handleClickedPhoto}
      />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
