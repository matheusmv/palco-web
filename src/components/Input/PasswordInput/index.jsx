import PropTypes from 'prop-types';

import './styles.css';

function PasswordInput({ className, value, placeHolder, onChangeFn, style, bottomMessage = undefined }) {
  return (
    <div className="PasswordInputContainer" style={style}>
      <input
        className={`PasswordInput ${className}`}
        value={value}
        placeholder={placeHolder || '•••••'}
        onChange={onChangeFn}
        style={style}
        type="password"
      />
      {!!bottomMessage && <span className="PasswordInputBottomMessage">{bottomMessage}</span>}
    </div>
  );
}

PasswordInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  placeHolder: PropTypes.string,
  onChangeFn: PropTypes.func,
  style: PropTypes.object,
  bottomMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PasswordInput;
