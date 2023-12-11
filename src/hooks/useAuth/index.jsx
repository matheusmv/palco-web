import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { checkToken } from '../../services/event-manager/api';
import { setUser } from '../../store/user/reducer';
import { AUTHORIZATION_KEY } from '../../utils/auth/storage.constants';
import { clearStorage, getItemStorage } from '../../utils/auth/storage.proxy';

export function useAuth() {
  const [token] = useState(getItemStorage(AUTHORIZATION_KEY));

  const dispatch = useDispatch();

  const ensureAuthenticated = useCallback(
    async (onSuccessFn, onErrorFn) => {
      await checkToken()
        .then((user) => {
          if (!user) {
            clearStorage();
            onErrorFn?.();
            return;
          }

          dispatch(setUser(user));
          onSuccessFn?.();
        })
        .catch((err) => {
          clearStorage();
          onErrorFn?.();
          console.error(err.response.data);
        });
    },
    [dispatch],
  );

  return { token, ensureAuthenticated };
}
