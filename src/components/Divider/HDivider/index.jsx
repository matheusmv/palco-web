import PropTypes from 'prop-types';

import './styles.css';

function HDivider({ style }) {
  return <div className="HDivider" style={style}></div>;
}

HDivider.propTypes = {
  style: PropTypes.object,
};

export default HDivider;
