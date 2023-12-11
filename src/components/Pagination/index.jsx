import './styles.css';

import PropTypes from 'prop-types';

import CustomButton from '../Button/CustomButton';
import { getVisiblePaginationButtons } from './utils';

function Pagination({ currentPage, totalItems, totalPages, onPageChange }) {
  return (
    <div className="PaginationContainer">
      <ul className="Pagination">
        {totalPages > 1 && (
          <CustomButton
            className="PaginationButton PrevButton"
            text="Anterior"
            onClickFn={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
        )}
        <div className="PaginationButtonContainer">
          {totalPages > 1 &&
            getVisiblePaginationButtons(totalItems, currentPage, totalPages).map((page) => (
              <CustomButton
                key={page}
                className={`PaginationButton ${page === currentPage ? 'PaginationButton-active' : ''}`}
                text={page}
                onClickFn={() => onPageChange(page)}
              />
            ))}
        </div>
        {totalPages > 1 && (
          <CustomButton
            className="PaginationButton NextButton"
            text="Próximo"
            onClickFn={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        )}
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
