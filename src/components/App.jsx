import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';

export const App = () => {
  const [state, setState] = useState({
    query: '',
    images: [],
    selectedImage: null,
    currentPage: 1,
    isLoading: false,
  });

  const handleSavingQuery = queryText => {
    setState(prevState => ({
      ...prevState,
      query: queryText,
    }));
  };

  const handleAddingImages = imagesArr => {
    setState(prevState => ({
      ...prevState,
      images: imagesArr,
    }));
  };

  const handleAddingMoreImages = imagesArr => {
    setState(prevState => ({
      ...prevState,
      images: [...prevState.images, ...imagesArr],
    }));
  };

  const handleError = errorMessage => {
    setState(prevState => ({
      ...prevState,
      errorText: errorMessage,
    }));
    console.log(errorMessage);
  };

  const handleCurrentPage = () => {
    setState(prevState => ({
      ...prevState,
      currentPage: state.currentPage + 1,
    }));
  };

  const handleOpenModal = image => {
    setState(prevState => ({
      ...prevState,
      selectedImage: image,
    }));
  };

  const handleCloseModal = () => {
    setState(prevState => ({
      ...prevState,
      selectedImage: null,
    }));
  };

  const handleLoader = () => {
    setState(prevState => ({
      ...prevState,
      isLoading: !prevState.isLoading,
    }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        fontSize: 40,
        color: '#010101',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 25,
      }}
    >
      <Searchbar
        addImages={handleAddingImages}
        onError={handleError}
        saveQuery={handleSavingQuery}
      />
      <ImageGallery
        state={state}
        loaderToggle={handleLoader}
        addMoreImages={handleAddingMoreImages}
        onError={handleError}
        saveCurrentPage={handleCurrentPage}
        openModal={handleOpenModal}
      />
      {state.selectedImage && (
        <Modal
          selectedImage={state.selectedImage.largeImageURL}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};

App.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedImage: PropTypes.object,
};
