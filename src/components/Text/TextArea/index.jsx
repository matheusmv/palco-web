import PropTypes from 'prop-types';

import './styles.css';

function TextArea({ className, value, content, onChangeFn, style, fixed }) {
  return (
    <textarea
      className={`TextArea ${className}`}
      style={{ resize: fixed ? 'none' : '', ...style }}
      value={value}
      onChange={onChangeFn}
    >
      {content}
    </textarea>
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  content: PropTypes.string,
  onChangeFn: PropTypes.func,
  style: PropTypes.object,
  fixed: PropTypes.bool,
};

export default TextArea;
