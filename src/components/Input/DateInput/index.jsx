import PropTypes from 'prop-types';

import { useState } from 'react';

import DatePicker from 'react-datepicker';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import './styles.css';

// TODO: fix width

function DateInput({ className, value, placeHolder, onChangeFn, onKeyDownFn, style, bottomMessage = undefined }) {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="DateInputContainer" style={style}>
      <DatePicker
        className={`DateInput ${className}`}
        placeholderText={placeHolder}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onChangeFn(date);
        }}
      />
      <CalendarTodayIcon className="CalendarIcon" />
    </div>
  );
}

DateInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  placeHolder: PropTypes.string,
  onChangeFn: PropTypes.func,
  onKeyDownFn: PropTypes.func,
  style: PropTypes.object,
  bottomMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default DateInput;
