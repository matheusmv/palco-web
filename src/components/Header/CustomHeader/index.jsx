import PropTypes from 'prop-types';

import './styles.css';

function CustomHeader({ children, style }) {
  return (
    <div className="CustomHeaderContainer">
      <header className="CustomHeader" style={style}>
        {children}
      </header>
    </div>
  );
}

CustomHeader.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default CustomHeader;
