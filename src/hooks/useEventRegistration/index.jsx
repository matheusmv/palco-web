import { useState } from 'react';
import { registerEvent } from '../../services/event-manager/api';
import { toast } from 'react-toastify';

export function useEventRegistration() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescripton, setEventDescription] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [eventLocationCep, seteventLocationCep] = useState('');
  const [eventLocationState, seteventLocationState] = useState('');
  const [eventLocationCity, seteventLocationCity] = useState('');
  const [eventLocationNeighborhood, seteventLocationNeighborhood] = useState('');
  const [eventLocationStreet, seteventLocationStreet] = useState('');
  const [eventLocationNumber, seteventLocationNumber] = useState('');
  const [eventLocationComplement, seteventLocationComplement] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleEventCategoryChange = (e) => {
    setEventCategory(e.target.value);
  };

  const handleEventLocationCepChange = (e) => {
    seteventLocationCep(e.target.value);
  };

  const handleEventLocationStateChange = (e) => {
    seteventLocationState(e.target.value);
  };

  const handleEventLocationCityChange = (e) => {
    seteventLocationCity(e.target.value);
  };

  const handleEventLocationNeighborhoodChange = (e) => {
    seteventLocationNeighborhood(e.target.value);
  };

  const handleEventLocationStreetChange = (e) => {
    seteventLocationStreet(e.target.value);
  };

  const handleEventLocationNumberChange = (e) => {
    seteventLocationNumber(e.target.value);
  };

  const handleEventLocationComplementChange = (e) => {
    seteventLocationComplement(e.target.value);
  };

  const executeEventRegistration = async (onSuccessFn, onErrorFn) => {
    console.log({
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
    });

    await registerEvent({
      name: eventName,
      date: eventDate,
      description: eventDescripton,
      category: eventCategory,
      local: {
        cep: eventLocationCep,
        state: eventLocationState,
        city: eventLocationCity,
        neighborhood: eventLocationNeighborhood,
        street: eventLocationStreet,
        number: eventLocationNumber,
        complement: eventLocationComplement,
      },
    })
      .then(() => {
        onSuccessFn?.();
      })
      .catch((err) => {
        const { data } = err.response;

        if (data.issues) {
          data.issues.forEach((issue) => {
            toast.error(issue.error, { autoClose: false });
          });
        } else {
          toast.error(data.message, { autoClose: false });
        }

        console.error(data);

        onErrorFn?.();
      });
  };

  return {
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
  };
}
