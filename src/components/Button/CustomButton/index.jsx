import './styles.css';

import PropTypes from 'prop-types';

function CustomButton({ className, onClickFn, text, style, disabled }) {
  return (
    <button className={`CustomButton ${className}`} onClick={onClickFn} style={style} disabled={disabled}>
      {text || ''}
    </button>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
  onClickFn: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
};

export default CustomButton;
