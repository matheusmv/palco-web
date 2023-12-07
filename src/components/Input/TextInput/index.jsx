import PropTypes from 'prop-types';

import './styles.css';

function TextInput({ className, value, placeHolder, onChangeFn, onKeyDownFn, style, bottomMessage = undefined }) {
  return (
    <div className="TextInputContainer" style={style}>
      <input
        className={`TextInput ${className}`}
        value={value}
        placeholder={placeHolder}
        onChange={onChangeFn}
        onKeyDown={onKeyDownFn}
        style={style}
        type="text"
      />
      {!!bottomMessage && <span className="TextInputBottomMessage">{bottomMessage}</span>}
    </div>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  placeHolder: PropTypes.string,
  onChangeFn: PropTypes.func,
  onKeyDownFn: PropTypes.func,
  style: PropTypes.object,
  bottomMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default TextInput;
