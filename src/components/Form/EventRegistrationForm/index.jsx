import './styles.css';

import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useEvent } from '../../../hooks/useEvent';
import CustomButton from '../../Button/CustomButton';
import DateInput from '../../Input/DateInput';
import TextInput from '../../Input/TextInput';
import CategorySelector from '../../Selector/CategorySelector';
import NormalText from '../../Text/NormalText';
import TextArea from '../../Text/TextArea';
import { tryToGetAddressDetailsByZipCode } from './utils';

function EventRegistrationForm({ onCloseFn }) {
  const {
    eventDetails,
    setEventDetails,
    setFieldOnState,
    handleNameChange,
    handleDateChange,
    handleDescriptionChange,
    handleCepChange,
    handleStateChange,
    handleCityChange,
    handleNeighborhoodChange,
    handleStreetChange,
    handleNumberChange,
    handleComplementChange,
    executeRegistration,
  } = useEvent();

  const submitHandler = async () => {
    executeRegistration(() => {
      toast.success('Evento registrado com sucesso.');
      onCloseFn?.();
    });
  };

  useEffect(() => {
    tryToGetAddressDetailsByZipCode(
      eventDetails.cep,
      ({ state, city, neighborhood, street }) => {
        setEventDetails((eventDetails) => ({ ...eventDetails, city, state, street, neighborhood }));
      },
      () => {
        toast.error('CEP não encontrado');
      },
    );
  }, [eventDetails.cep, setEventDetails]);

  return (
    <div className="EventRegistrationFormContainer">
      <div className="EventRegistrationFormContainer-event">
        <h2 className="EventRegistrationFormTitle-event">Detalhes do Evento</h2>
        <form className="EventRegistrationFormContainer-event-form">
          <TextInput
            className="EventRegistrationFormInput"
            placeHolder="Nome"
            style={{ width: '100%' }}
            value={eventDetails.name}
            onChangeFn={handleNameChange}
          />
          <div className="EventRegistrationFormGroupInRow">
            <DateInput
              className="EventRegistrationFormInput"
              placeHolder="Data"
              value={eventDetails.date}
              onChangeFn={handleDateChange}
            />
            <CategorySelector
              placeholder="Categoria"
              onSelectFn={(category) => setFieldOnState('category', category)}
            />
          </div>
          <div className="EventRegistrationFormGroupInColumn" style={{ margin: '15px' }}>
            <NormalText content="Descreva o evento" style={{ fontSize: '14px', color: 'var(--clr-gray-700)' }} />
            <TextArea
              style={{ height: '150px', width: '100%' }}
              fixed
              value={eventDetails.description}
              onChangeFn={handleDescriptionChange}
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
              value={eventDetails.cep}
              onChangeFn={handleCepChange}
            />
            <TextInput
              className="EventRegistrationFormInput LocationInput"
              placeHolder="Número"
              value={eventDetails.number}
              onChangeFn={handleNumberChange}
            />
          </div>
          <TextInput
            className="EventRegistrationFormInput LocationInput"
            placeHolder="Rua"
            style={{ width: '100%' }}
            value={eventDetails.street}
            onChangeFn={handleStreetChange}
          />
          <TextInput
            className="EventRegistrationFormInput LocationInput"
            placeHolder="Bairro"
            style={{ width: '100%' }}
            value={eventDetails.neighborhood}
            onChangeFn={handleNeighborhoodChange}
          />
          <div className="EventRegistrationFormGroupInRow">
            <TextInput
              className="EventRegistrationFormInput LocationInput"
              placeHolder="Cidade"
              value={eventDetails.city}
              onChangeFn={handleCityChange}
            />
            <TextInput
              style={{ width: '80px' }}
              className="EventRegistrationFormInput LocationInput"
              placeHolder="Estado"
              value={eventDetails.state}
              onChangeFn={handleStateChange}
            />
          </div>
          <TextInput
            className="EventRegistrationFormInput LocationInput"
            placeHolder="Complemento"
            style={{ width: '100%' }}
            value={eventDetails.complement}
            onChangeFn={handleComplementChange}
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
