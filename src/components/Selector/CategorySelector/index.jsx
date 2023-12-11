import './styles.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropType from 'prop-types';
import { useEffect, useState } from 'react';

import { fetchCategories } from '../../../services/event-manager/api';
import NormalText from '../../Text/NormalText';

function CategorySelector({ placeholder = '', onSelectFn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [categories, setCategories] = useState([]);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsOpen((s) => !s);
  };

  const handleItemClick = (category) => {
    setSelectedItem(category);
    onSelectFn?.(category);
    setIsOpen(false);
  };

  const loadCategories = async () => {
    await fetchCategories().then((categories) => {
      setCategories(categories);
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="CategorySelectorContainer">
      <nav className="CategorySelector">
        <button className="CategorySelectorDropdownButton" onClick={handleDropdownToggle}>
          <NormalText style={{ color: 'var(--clr-gray-700)' }} content={selectedItem ? selectedItem : placeholder} />
          <ExpandMoreIcon className={isOpen ? 'Selector-icon Selector-open' : 'Selector-icon'} />
        </button>
        {isOpen && (
          <ul className="CategorySelectorDropdownMenu">
            {categories.map(({ id, name }) => (
              <li key={id} className="CategorySelectorDropdownItem">
                <button
                  className="CategorySelectorDropdownItemButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(name);
                  }}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}

CategorySelector.propTypes = {
  placeholder: PropType.string,
  categories: PropType.array,
  onSelectFn: PropType.func,
};

export default CategorySelector;
