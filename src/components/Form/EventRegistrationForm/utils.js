import { fetchAddressDetailsFromCep } from '../../../services/brasilapi/api';

export async function tryToGetAddressDetailsByZipCode(cep, onSuccessFn, onErrorFn) {
  const cepRegex = /^(\d{5})-?(\d{3})$/;
  if (cep.match(cepRegex)) {
    await fetchAddressDetailsFromCep(cep)
      .then((cep) => onSuccessFn?.(cep))
      .catch(() => onErrorFn?.());
  }
}
