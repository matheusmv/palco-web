import PropTypes from 'prop-types';
import { theme } from '../../styles/theme';

function Container({ children }) {
  return <div style={styles.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

const styles = {
  container: {
    flex: 1,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background.primary,
  },
};

export default Container;
