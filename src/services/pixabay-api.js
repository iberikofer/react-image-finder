import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY || '';
export const PER_PAGE = 12;

/**
 * Fetch photos from Pixabay API.
 * @param {string} query - The search term.
 * @param {number} page - The page number.
 * @returns {Promise<{ hits: Array<{ id: number, webformatURL: string, largeImageURL: string, tags: string }>, totalHits: number }>}
 */
export const fetchImages = async (query, page = 1) => {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    return { hits: [], totalHits: 0 };
  }

  if (!API_KEY) {
    console.warn(
      'Missing REACT_APP_PIXABAY_API_KEY. Please set your Pixabay API key in the .env file.'
    );
  }

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: cleanQuery,
      page,
      per_page: PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  const hits = (response.data.hits || []).map(image => ({
    id: image.id,
    webformatURL: image.webformatURL,
    largeImageURL: image.largeImageURL,
    tags: image.tags || '',
  }));

  return {
    hits,
    totalHits: response.data.totalHits || 0,
  };
};
