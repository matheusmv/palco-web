import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { getEventById, registerEvent } from '../../services/event-manager/api';

export function useEvent() {
  const [eventDetails, setEventDetails] = useState({
    id: '',
    name: '',
    date: '',
    description: '',
    category: '',
    cep: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: '',
  });

  const setFieldOnState = (key, value) => {
    setEventDetails((state) => ({ ...state, [key]: value }));
  };

  const handleNameChange = (e) => {
    setFieldOnState('name', e.target.value);
  };

  const handleDateChange = (e) => {
    setFieldOnState('date', e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setFieldOnState('description', e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFieldOnState('category', e.target.value);
  };

  const handleCepChange = (e) => {
    setFieldOnState('cep', e.target.value);
  };

  const handleStateChange = (e) => {
    setFieldOnState('state', e.target.value);
  };

  const handleCityChange = (e) => {
    setFieldOnState('city', e.target.value);
  };

  const handleNeighborhoodChange = (e) => {
    setFieldOnState('neighborhood', e.target.value);
  };

  const handleStreetChange = (e) => {
    setFieldOnState('street', e.target.value);
  };

  const handleNumberChange = (e) => {
    setFieldOnState('number', e.target.value);
  };

  const handleComplementChange = (e) => {
    setFieldOnState('complement', e.target.value);
  };

  const fetchById = useCallback(async (eventId, onSuccessFn, onErrorFn) => {
    await getEventById(eventId)
      .then((event) => {
        setEventDetails({
          id: event.id,
          name: event.name,
          date: event.date,
          description: event.description,
          category: event.category.name,
          cep: event.local.cep,
          state: event.local.state,
          city: event.local.city,
          neighborhood: event.local.neighborhood,
          street: event.local.street,
          number: event.local.number,
          complement: event.local.complement,
        });
        onSuccessFn?.();
      })
      .catch(() => {
        onErrorFn?.();
      });
  }, []);

  const executeRegistration = useCallback(
    async (onSuccessFn, onErrorFn) => {
      await registerEvent(eventDetails)
        .then(() => onSuccessFn?.())
        .catch((err) => {
          const { data } = err.response;

          if (data.issues) {
            data.issues.forEach((issue) => {
              toast.error(issue.error, { autoClose: 20000, pauseOnHover: true });
            });
          } else {
            toast.error(data.message);
          }

          console.error(data);

          onErrorFn?.();
        });
    },
    [eventDetails],
  );

  return {
    eventDetails,
    handleNameChange,
    handleDateChange,
    handleDescriptionChange,
    handleCategoryChange,
    handleCepChange,
    handleStateChange,
    handleCityChange,
    handleNeighborhoodChange,
    handleStreetChange,
    handleNumberChange,
    handleComplementChange,
    fetchById,
    executeRegistration,
  };
}
