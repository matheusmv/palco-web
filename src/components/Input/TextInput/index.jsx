import PropTypes from 'prop-types';

import './styles.css';

function TextInput({ className, placeHolder, onChangeFn, style, bottomMessage = undefined }) {
  return (
    <div className="TextInputContainer">
      <input
        className={`TextInput ${className}`}
        placeholder={placeHolder}
        onChange={onChangeFn}
        style={style}
        type="text"
      />
      {!!bottomMessage && <span className="TextInputBottomMessage">{bottomMessage}</span>}
    </div>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  onChangeFn: PropTypes.func,
  style: PropTypes.object,
  bottomMessage: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

export default TextInput;
