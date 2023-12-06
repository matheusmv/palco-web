import PropTypes from 'prop-types';

import './styles.css';
import { Link } from 'react-router-dom';

function LinkText({ className, to, content, style }) {
  return (
    <Link className={`LinkText ${className}`} to={to} style={style}>
      {content}
    </Link>
  );
}

LinkText.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  content: PropTypes.string,
  style: PropTypes.object,
};

export default LinkText;
