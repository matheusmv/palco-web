import './styles.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useEventPage } from '../../../hooks/useEventPage';
import CustomButton from '../../Button/CustomButton';
import EventCardDetails from '../../Card/EventDetailsCard';
import HDivider from '../../Divider/HDivider';
import NormalText from '../../Text/NormalText';

function EventTable() {
  const { events, page, handleCurrentPageChange, handleFilterChange } = useEventPage();

  const handlePageChange = (pageNumber) => {
    handleCurrentPageChange({ pageNumber });
  };

  return (
    <div className="EventTableContainer">
      <div className="EventTable">
        <EventTableHeader onOrderChangeFn={handleFilterChange} />
        <EventTableBody events={events} />
      </div>
      <EventTablePagination
        currentPage={page.currentPage}
        totalItems={page.totalItems}
        totalPages={page.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

const orderIcons = (fieldName, onClickFn) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
      <KeyboardArrowUpIcon fontSize="small" onClick={() => onClickFn({ orderBy: fieldName, order: 'asc' })} />
      <KeyboardArrowDownIcon fontSize="small" onClick={() => onClickFn({ orderBy: fieldName, order: 'desc' })} />
    </div>
  );
};

function EventTableHeader({ onOrderChangeFn }) {
  return (
    <div className="EventTableHeaderContainer">
      <thead className="EventTableHeader">
        <tr className="EventTableHeaderTr">
          <th className="EventTableHeaderThName">
            {orderIcons('name', onOrderChangeFn)}
            <NormalText className="EventTableHeaderThText" content={'Nome'} />
          </th>
          <th className="EventTableHeaderThDescription">
            {orderIcons('description', onOrderChangeFn)}
            <NormalText className="EventTableHeaderThText" content={'Descrição'} />
          </th>
          <th className="EventTableHeaderThLocation">
            {orderIcons('local', onOrderChangeFn)}
            <NormalText className="EventTableHeaderThText" content={'Local'} />
          </th>
          <th className="EventTableHeaderThCategory">
            {orderIcons('category', onOrderChangeFn)}
            <NormalText className="EventTableHeaderThText" content={'Categoria'} />
          </th>
          <th className="EventTableHeaderThDate">
            {orderIcons('date', onOrderChangeFn)}
            <NormalText className="EventTableHeaderThText" content={'Data'} />
          </th>
        </tr>
      </thead>
    </div>
  );
}

EventTableHeader.propTypes = {
  onOrderChangeFn: PropTypes.func,
};

function EventTableBody({ events }) {
  const [eventId, setEventId] = useState('');
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);

  const callApiAndLoadEventDetails = (id) => {
    setEventId(id);
    setShowEventDetailsModal(true);
  };

  return (
    <div className="EventTableBodyContainer">
      <tbody className="EventTableBody">
        {events.map(({ id, name, description, date, category, local }) => (
          <>
            <HDivider />
            <EventTableBodyRow
              name={name}
              description={description}
              location={`${local.city} - ${local.state}`}
              category={category.name.toUpperCase()}
              date={new Date(date).toLocaleDateString('pt-BR')}
              onClickFn={() => callApiAndLoadEventDetails(id)}
            />
          </>
        ))}
      </tbody>
      {showEventDetailsModal && (
        <EventCardDetails eventId={eventId} onCloseFn={() => setShowEventDetailsModal(false)} />
      )}
    </div>
  );
}

EventTableBody.propTypes = {
  events: PropTypes.array,
};

function EventTableBodyRow({ name, description, location, category, date, onClickFn }) {
  return (
    <div className="EventTableBodyRowContainer">
      <tr className="EventTableBodyRow" onClick={onClickFn}>
        <td className="EventTableBodyRowTdName">
          <div className="EventTableBodyRowTdContainer">{name}</div>
        </td>
        <td className="EventTableBodyRowTdDescription">
          <div className="EventTableBodyRowTdContainer">{description}</div>
        </td>
        <td className="EventTableBodyRowTdLocation">{location}</td>
        <td className="EventTableBodyRowTdCategory">
          <NormalText className="EventTableBodyCategoryTag" content={category} />
        </td>
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
  onClickFn: PropTypes.func,
};

function getVisiblePaginationButtons(totalItems, currentPage, totalPages) {
  const visiblePages = totalItems;
  const halfVisiblePages = Math.floor(visiblePages / 2);

  const startPage = Math.max(1, currentPage - halfVisiblePages);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
}

function EventTablePagination({ currentPage, totalItems, totalPages, onPageChange }) {
  return (
    <div className="EventTablePaginationContainer">
      <ul className="EventTablePagination">
        {totalPages > 1 && (
          <CustomButton
            className="EventTablePaginationButton PrevButton"
            text="Anterior"
            onClickFn={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
        )}
        <div className="EventTablePaginationButtonContainer">
          {getVisiblePaginationButtons(totalItems, currentPage, totalPages).map((page) => (
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
        {totalPages > 1 && (
          <CustomButton
            className="EventTablePaginationButton NextButton"
            text="Próximo"
            onClickFn={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        )}
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
