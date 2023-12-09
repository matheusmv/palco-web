import './styles.css';

import PropTypes from 'prop-types';

function NormalText({ className, content, style }) {
  return (
    <p className={`NormalText ${className}`} style={style}>
      {content}
    </p>
  );
}

NormalText.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  style: PropTypes.object,
};

export default NormalText;
