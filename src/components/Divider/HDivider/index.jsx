import PropTypes from 'prop-types';

import './styles.css';

function HDivider({ className, style }) {
  return <div className={`HDivider ${className}`} style={style}></div>;
}

HDivider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default HDivider;
