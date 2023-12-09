import './styles.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

import VDivider from '../Divider/VDivider';
import TextInput from '../Input/TextInput';
import NormalText from '../Text/NormalText';

function SearchBar({ className, onChangeFn, onSearchFn, style }) {
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      onSearchFn?.(e.target.value);
    }
  };

  return (
    <div className="SearchBarContainer" style={style}>
      <div className={`SearchBar ${className}`} style={style}>
        <SearchIcon className="SearchBar-icon" />
        <TextInput
          className="SearchBar-input"
          placeHolder={'Buscar evento'}
          onChangeFn={onChangeFn}
          onKeyDownFn={handleEnterKey}
          style={{ height: '100%' }}
        />
        <VDivider />
        <div className="SearchBarFilter">
          <NormalText className="SearchBarFilter-text" content={'Filtros'} />
          <ExpandMoreIcon className="SearchBarFilter-icon" />
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onChangeFn: PropTypes.func,
  onSearchFn: PropTypes.func,
  style: PropTypes.object,
};

export default SearchBar;
