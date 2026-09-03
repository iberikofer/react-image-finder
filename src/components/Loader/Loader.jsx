import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderWrapper} role="status" aria-live="polite">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="loading-images"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e55d87', '#5fc3e4', '#e55d87', '#5fc3e4', '#e55d87']}
      />
    </div>
  );
};
