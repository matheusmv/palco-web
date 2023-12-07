import PropTypes from 'prop-types';

import NormalText from '../../Text/NormalText';
import DefaultSpinner from '../../Spinner/DefaultSpinner';

import './styles.css';
import HDivider from '../../Divider/HDivider';
import CustomButton from '../../Button/CustomButton';
import { useState } from 'react';

function EventTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="EventTableContainer">
      <div className="EventTable">
        <EventTableHeader />
        <EventTableBody />
      </div>
      <EventTablePagination currentPage={currentPage} totalItems={6} totalPages={17} onPageChange={handlePageChange} />
    </div>
  );
}

function EventTableHeader() {
  return (
    <div className="EventTableHeaderContainer">
      <thead className="EventTableHeader">
        <tr className="EventTableHeaderTr">
          <th className="EventTableHeaderThName">
            <NormalText className="EventTableHeaderThText" content={'Nome'} />
          </th>
          <th className="EventTableHeaderThDescription">
            <NormalText className="EventTableHeaderThText" content={'Descrição'} />
          </th>
          <th className="EventTableHeaderThLocation">
            <NormalText className="EventTableHeaderThText" content={'Local'} />
          </th>
          <th className="EventTableHeaderThCategory">
            <NormalText className="EventTableHeaderThText" content={'Categoria'} />
          </th>
          <th className="EventTableHeaderThDate">
            <NormalText className="EventTableHeaderThText" content={'Data'} />
          </th>
        </tr>
      </thead>
    </div>
  );
}

function EventTableBody() {
  const loading = false;

  if (loading) {
    return (
      <div className="EventTableBodyContainer">
        <DefaultSpinner />
      </div>
    );
  }

  return (
    <div className="EventTableBodyContainer">
      <tbody className="EventTableBody">
        <HDivider />
        <EventTableBodyRow
          name={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          location={'Fortaleza - CE'}
          category={'categoria'}
          date={'25/12/2023'}
        />
        <HDivider />
        <EventTableBodyRow
          name={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          location={'Fortaleza - CE'}
          category={'categoria'}
          date={'25/12/2023'}
        />
        <HDivider />
        <EventTableBodyRow
          name={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          location={'Fortaleza - CE'}
          category={'categoria'}
          date={'25/12/2023'}
        />
        <HDivider />
        <EventTableBodyRow
          name={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          location={'Fortaleza - CE'}
          category={'categoria'}
          date={'25/12/2023'}
        />
        <HDivider />
        <EventTableBodyRow
          name={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          location={'Fortaleza - CE'}
          category={'categoria'}
          date={'25/12/2023'}
        />
        <HDivider />
        <EventTableBodyRow
          name={
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          location={'Fortaleza - CE'}
          category={'categoria'}
          date={'25/12/2023'}
        />
      </tbody>
    </div>
  );
}

function EventTableBodyRow({ name, description, location, category, date }) {
  return (
    <div className="EventTableBodyRowContainer">
      <tr className="EventTableBodyRow">
        <td className="EventTableBodyRowTdName">
          <div className="EventTableBodyRowTdContainer">{name}</div>
        </td>
        <td className="EventTableBodyRowTdDescription">
          <div className="EventTableBodyRowTdContainer">{description}</div>
        </td>
        <td className="EventTableBodyRowTdLocation">{location}</td>
        <td className="EventTableBodyRowTdCategory">{category}</td>
        <td className="EventTableBodyRowTdDate">{date}</td>
      </tr>
    </div>
  );
}

EventTableBodyRow.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  category: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

function EventTablePagination({ currentPage, totalItems, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="EventTablePaginationContainer">
      <ul className="EventTablePagination">
        <CustomButton
          className="EventTablePaginationButton PrevButton"
          text="Anterior"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <div className="EventTablePaginationButtonContainer">
          {pages.map((page) => (
            <CustomButton
              key={page}
              className={`EventTablePaginationButton ${
                page === currentPage ? 'EventTablePaginationButton-active' : ''
              }`}
              text={page}
              onClickFn={() => onPageChange(page)}
            />
          ))}
        </div>
        <CustomButton
          className="EventTablePaginationButton NextButton"
          text="Próximo"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </ul>
    </div>
  );
}

EventTablePagination.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default EventTable;
