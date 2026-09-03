import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from '../services/pixabay-api';
import css from './App.module.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = async newQuery => {
    if (newQuery === query && images.length > 0) {
      return;
    }

    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalHits(0);
    setError(null);
    setIsLoading(true);

    try {
      const { hits, totalHits: count } = await fetchImages(newQuery, 1);
      setImages(hits);
      setTotalHits(count);
    } catch (err) {
      setError('Unable to fetch images. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setIsLoading(true);
    setError(null);

    try {
      const { hits } = await fetchImages(query, nextPage);
      setImages(prevImages => [...prevImages, ...hits]);
      setPage(nextPage);

      // Smoothly scroll down by two row heights
      setTimeout(() => {
        window.scrollBy({
          top: 500,
          behavior: 'smooth',
        });
      }, 100);
    } catch (err) {
      setError('Failed to load more images. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectImage = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const hasMoreImages = images.length > 0 && images.length < totalHits;

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSearchSubmit} />

      <main className={css.main}>
        <h2 className={css.srOnly}>Search Results</h2>

        {error && (
          <div role="alert" className={css.errorMessage}>
            {error}
          </div>
        )}

        {images.length > 0 && (
          <ImageGallery images={images} onSelect={handleSelectImage} />
        )}

        {isLoading && <Loader />}

        {!isLoading && hasMoreImages && (
          <Button onClick={handleLoadMore} isLoading={isLoading} />
        )}

        {!isLoading && query && images.length === 0 && !error && (
          <p className={css.noResults}>
            No images found for &ldquo;{query}&rdquo;. Try another search term.
          </p>
        )}

        {!query && images.length === 0 && !isLoading && (
          <p className={css.placeholderText}>
            Enter keywords in the search bar above to discover photos.
          </p>
        )}
      </main>

      <footer className={css.footer}>
        <p>
          Powered by{' '}
          <a
            href="https://pixabay.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footerLink}
          >
            Pixabay API
          </a>
          . Built with React.
        </p>
      </footer>

      {selectedImage && (
        <Modal
          selectedImage={selectedImage.largeImageURL}
          altText={selectedImage.tags}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};
