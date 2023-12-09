import './styles.css';

import PropTypes from 'prop-types';

function VDivider({ className, style }) {
  return <div className={`VDivider ${className}`} style={style}></div>;
}

VDivider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default VDivider;
