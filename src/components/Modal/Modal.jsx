import { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ selectedImage, closeModal }) => {
  useEffect(() => {
    const handleCloseModal = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [closeModal]);

  const handleOpenModal = () => {
    const instance = basicLightbox.create(
      `<img src="${selectedImage}" alt="Bigger modal image">`
    );
    instance.show();
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal} onClick={handleImageClick}>
        <img
          src={selectedImage}
          alt="Big modal img"
          onClick={handleOpenModal}
          style={{ maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
