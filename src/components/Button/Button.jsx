import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick, isLoading }) => {
  return (
    <div className={css.buttonContainer}>
      <button
        type="button"
        className={css.button}
        onClick={onClick}
        disabled={isLoading}
        aria-label="Load more images"
      >
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};
