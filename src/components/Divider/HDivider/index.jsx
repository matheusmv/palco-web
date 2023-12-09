import './styles.css';

import PropTypes from 'prop-types';

function HDivider({ className, style }) {
  return <div className={`HDivider ${className}`} style={style}></div>;
}

HDivider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default HDivider;
