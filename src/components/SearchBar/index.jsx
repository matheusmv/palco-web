import './styles.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import CustomButton from '../Button/CustomButton';
import VDivider from '../Divider/VDivider';
import TextInput from '../Input/TextInput';
import NormalText from '../Text/NormalText';
import { buildSearchParams } from './utils';

function SearchBar({ className, style, onSearch }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    eventName: undefined,
    date: undefined,
    startDate: undefined,
    endDate: undefined,
    category: undefined,
    cep: undefined,
    state: undefined,
    city: undefined,
    neighborhood: undefined,
    street: undefined,
    orderBy: 'date',
    order: 'asc',
  });

  const handleSearchChange = (e) => {
    setSearch((state) => ({ ...state, eventName: e.target.value || undefined }));
  };

  const handleSearch = () => {
    const params = buildSearchParams(search);
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(params)}`,
    });
    onSearch?.(params);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="SearchBarContainer" style={style}>
      <div className={`SearchBar ${className}`} style={style}>
        <CustomButton
          className="SearchBar-button"
          onClickFn={handleSearch}
          text={<SearchIcon className="SearchBar-icon" />}
        />
        <TextInput
          className="SearchBar-input"
          placeHolder={'Buscar evento'}
          onChangeFn={handleSearchChange}
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
  style: PropTypes.object,
  onSearch: PropTypes.func,
};

export default SearchBar;
