import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { useEventRegistration } from '../../../hooks/useEventRegistration';

import CloseIcon from '@mui/icons-material/Close';

import CustomButton from '../../Button/CustomButton';
import TextInput from '../../Input/TextInput';
import NormalText from '../../Text/NormalText';
import TextArea from '../../Text/TextArea';

import './styles.css';

function EventRegistrationForm({ onCloseFn }) {
  const {
    eventName,
    eventDate,
    eventDescripton,
    eventCategory,
    eventLocationCep,
    eventLocationState,
    eventLocationCity,
    eventLocationNeighborhood,
    eventLocationStreet,
    eventLocationNumber,
    eventLocationComplement,
    handleEventNameChange,
    handleEventDateChange,
    handleEventDescriptionChange,
    handleEventCategoryChange,
    handleEventLocationCepChange,
    handleEventLocationStateChange,
    handleEventLocationCityChange,
    handleEventLocationNeighborhoodChange,
    handleEventLocationStreetChange,
    handleEventLocationNumberChange,
    handleEventLocationComplementChange,
    executeEventRegistration,
  } = useEventRegistration();

  const submitHandler = async () => {
    executeEventRegistration(() => toast.success('Evento registrado com sucesso.'));
  };

  return (
    <div className="EventRegistrationFormContainer">
      <div className="EventRegistrationFormContainer-event">
        <h2 className="EventRegistrationFormTitle-event">Detalhes do Evento</h2>
        <form className="EventRegistrationFormContainer-event-form">
          <TextInput
            className="EventRegistrationFormInput"
            placeHolder="Nome"
            style={{ width: '100%' }}
            value={eventName}
            onChangeFn={handleEventNameChange}
          />
          <div className="EventRegistrationFormGroupInRow">
            <TextInput
              className="EventRegistrationFormInput"
              placeHolder="Data"
              value={eventDate}
              onChangeFn={handleEventDateChange}
            />
            <TextInput
              className="EventRegistrationFormInput"
              placeHolder="Categoria"
              value={eventCategory}
              onChangeFn={handleEventCategoryChange}
            />
          </div>
          <div className="EventRegistrationFormGroupInColumn" style={{ margin: '15px' }}>
            <NormalText content="Descreva o evento" style={{ fontSize: '14px', color: 'var(--clr-gray-700)' }} />
            <TextArea
              style={{ height: '150px', width: '100%' }}
              fixed
              value={eventDescripton}
              onChangeFn={handleEventDescriptionChange}
            />
          </div>
        </form>
      </div>
      <div className="EventRegistrationFormContainer-location">
        <h2 className="EventRegistrationFormTitle-location">
          Localização
          <CloseIcon className="EventRegistrationForm-close-icon" onClick={onCloseFn} />
        </h2>
        <form className="EventRegistrationFormContainer-location-form">
          <div className="EventRegistrationFormGroupInRow">
            <TextInput
              className="EventRegistrationFormInput LocationInput"
              placeHolder="CEP"
              value={eventLocationCep}
              onChangeFn={handleEventLocationCepChange}
            />
            <TextInput
              className="EventRegistrationFormInput LocationInput"
              placeHolder="Número"
              value={eventLocationNumber}
              onChangeFn={handleEventLocationNumberChange}
            />
          </div>
          <TextInput
            className="EventRegistrationFormInput LocationInput"
            placeHolder="Rua"
            style={{ width: '100%' }}
            value={eventLocationStreet}
            onChangeFn={handleEventLocationStreetChange}
          />
          <TextInput
            className="EventRegistrationFormInput LocationInput"
            placeHolder="Bairro"
            style={{ width: '100%' }}
            value={eventLocationNeighborhood}
            onChangeFn={handleEventLocationNeighborhoodChange}
          />
          <div className="EventRegistrationFormGroupInRow">
            <TextInput
              className="EventRegistrationFormInput LocationInput"
              placeHolder="Cidade"
              value={eventLocationCity}
              onChangeFn={handleEventLocationCityChange}
            />
            <TextInput
              className="EventRegistrationFormInput LocationInput"
              placeHolder="Estado"
              value={eventLocationState}
              onChangeFn={handleEventLocationStateChange}
            />
          </div>
          <TextInput
            className="EventRegistrationFormInput LocationInput"
            placeHolder="Complemento"
            style={{ width: '100%' }}
            value={eventLocationComplement}
            onChangeFn={handleEventLocationComplementChange}
          />
        </form>
        <CustomButton
          className="EventRegistrationFormSubmitButton"
          text="REGISTRAR EVENTO"
          onClickFn={() => submitHandler()}
        />
      </div>
    </div>
  );
}

EventRegistrationForm.propTypes = {
  onCloseFn: PropTypes.func,
};

export default EventRegistrationForm;
