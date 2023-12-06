import PropTypes from 'prop-types';

import './styles.css';

function VDivider({ style }) {
  return <div className="VDivider" style={style}></div>;
}

VDivider.propTypes = {
  style: PropTypes.object,
};

export default VDivider;
