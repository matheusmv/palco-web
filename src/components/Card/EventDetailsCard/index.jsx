import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useEvent } from '../../../hooks/useEvent';

import { parseEventDate } from '../../../utils/date';

import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import NormalText from '../../Text/NormalText';
import CustomButton from '../../Button/CustomButton';
import DefaultSpinner from '../../Spinner/DefaultSpinner';

import './styles.css';

function EventCardDetails({ eventId, onCloseFn }) {
  const [loading, setLoading] = useState(true);

  const { eventDetails, fetchById } = useEvent();

  useEffect(() => {
    fetchById(
      eventId,
      () => setLoading(false),
      () => toast.warning('Evento não encontrado'),
    );
  }, [fetchById, eventId]);

  if (loading) {
    return (
      <div className="EventCardDetailsContainer" style={{ height: 471, backgroundColor: 'var(--clr-purple-dark)' }}>
        <DefaultSpinner />
      </div>
    );
  }

  return (
    <div className="EventCardDetailsContainer">
      <div className="EventCardDetailsHeaderContainer">
        <div className="EventCardDetailsHeaderLeftSection">
          <NormalText className="EventCardDetailsCategoryInfo" content={eventDetails.category.toUpperCase()} />
        </div>
        <div className="EventCardDetailsHeaderRightSection">
          <div className="EventCardDetailsDateInfoContainer">
            <NormalText className="EventCardDetailsDate Day" content={parseEventDate(eventDetails.date).day} />
            <NormalText className="EventCardDetailsDate Month" content={parseEventDate(eventDetails.date).month} />
            <NormalText className="EventCardDetailsDate Year" content={parseEventDate(eventDetails.date).year} />
          </div>
          <CloseIcon className="EventCardDetailsDateInfo-close-icon" onClick={onCloseFn} />
        </div>
      </div>
      <div className="EventCardDetailsBodyContainer">
        <div className="EventCardDetailsBody">
          <h2 className="EventCardDetailsTitle">{eventDetails.name}</h2>
          <h3 className="EventCardDetailsLocation">{`${eventDetails.city} - ${eventDetails.state}`}</h3>
          <NormalText className="EventCardDetailsDescription" content={eventDetails.description} />
          <div className="EventCardDetailsBodyFooter">
            <div className="EventCardDetailsBodyFooterLeftSection">
              <CustomButton
                className="EventCardDetailsEditButton"
                text={<EditIcon fontSize="small" />}
                style={{ width: '100%', heigth: '100%', padding: '20px' }}
              />
            </div>
            <div className="EventCardDetailsBodyFooterRightSection">
              <NormalText
                className="EventCardDetailsLocationMeta"
                content={`${eventDetails.street}, ${eventDetails.number}`}
              />
              <NormalText
                className="EventCardDetailsLocationMeta"
                content={`${eventDetails.neighborhood}, ${eventDetails.cep}`}
              />
              {eventDetails.complement !== '' && (
                <NormalText className="EventCardDetailsLocationMeta" content={eventDetails.complement} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

EventCardDetails.propTypes = {
  eventId: PropTypes.string,
  onCloseFn: PropTypes.func,
};

export default EventCardDetails;
