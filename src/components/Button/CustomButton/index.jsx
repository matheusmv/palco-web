import PropTypes from 'prop-types';

import './styles.css';

function CustomButton({ className, onClickFn, text, style }) {
  return (
    <button className={`CustomButton ${className}`} onClick={onClickFn} style={style}>
      {text || ''}
    </button>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
  onClickFn: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default CustomButton;
