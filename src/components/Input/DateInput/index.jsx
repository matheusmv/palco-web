import './styles.css';

import PropTypes from 'prop-types';

function DateInput({ className, placeHolder, onChangeFn, style, bottomMessage = undefined }) {
  return (
    <div className="DateInputContainer" style={style}>
      <input type="date" className={`DateInput ${className}`} placeholder={placeHolder} onChange={onChangeFn} />
      {!!bottomMessage && <span className="DateInputBottomMessage">{bottomMessage}</span>}
    </div>
  );
}

DateInput.propTypes = {
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  onChangeFn: PropTypes.func,
  style: PropTypes.object,
  bottomMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default DateInput;
