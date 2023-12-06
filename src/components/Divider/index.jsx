import PropTypes from 'prop-types';

import './styles.css';

function Divider({ style }) {
  return <div className="Divider" style={style}></div>;
}

Divider.propTypes = {
  style: PropTypes.object,
};

export default Divider;
