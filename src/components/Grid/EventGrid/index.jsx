import './styles.css';

import PropTypes from 'prop-types';
import { useState } from 'react';

import { parseEventDate } from '../../../utils/date';
import EventCardDetails from '../../Card/EventDetailsCard';
import NormalText from '../../Text/NormalText';

function EventGrid({ events }) {
  const [eventId, setEventId] = useState(null);

  return (
    <div className="GridContainer">
      {events.map((event) => (
        <div key={event.id} className="GridCardContainer" onClick={() => setEventId(event.id)}>
          <div className="GridCardHeaderContainer">
            <div className="GridCardHeaderLeftSection">
              <NormalText className="GridCardCategoryInfo" content={event.category.name.toUpperCase()} />
            </div>
            <div className="GridCardHeaderRightSection">
              <div className="GridCardDateInfoContainer">
                <NormalText className="GridCardDate Day" content={parseEventDate(event.date).day} />
                /
                <NormalText className="GridCardDate Month" content={parseEventDate(event.date).month} />
                /
                <NormalText className="GridCardDate Year" content={parseEventDate(event.date).year} />
              </div>
            </div>
          </div>
          <div className="GridCardBodyContainer">
            <div className="GridCardBody">
              <h2 className="GridCardTitle">{event.name}</h2>
              <h3 className="GridCardLocation">{`${event.local.city} - ${event.local.state}`}</h3>
            </div>
          </div>
        </div>
      ))}
      {eventId && <EventCardDetails eventId={eventId} onCloseFn={() => setEventId(null)} />}
    </div>
  );
}

EventGrid.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      local: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        state: PropTypes.string,
      }),
    }),
  ).isRequired,
  onCloseFn: PropTypes.func,
};

export default EventGrid;
