import './styles.css';

import PropTypes from 'prop-types';

function Container({ children, style }) {
  return (
    <div className="Container" style={style}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default Container;
