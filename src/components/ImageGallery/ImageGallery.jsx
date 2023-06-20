import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({
  state,
  loaderToggle,
  addMoreImages,
  onError,
  saveCurrentPage,
  openModal,
}) => {
  const { images, isLoading } = state;
  const buttonIsShowed =
    images.length > 0 &&
    !isLoading &&
    images.length >= 12 &&
    images.length % 12 === 0;
  return (
    <div>
      <div className={css.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            image={image}
            state={state}
            openModal={openModal}
          />
        ))}
      </div>
      {buttonIsShowed && (
        <Button
          state={state}
          loaderToggle={loaderToggle}
          addMoreImages={addMoreImages}
          onError={onError}
          saveCurrentPage={saveCurrentPage}
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  loaderToggle: PropTypes.func.isRequired,
  addMoreImages: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
