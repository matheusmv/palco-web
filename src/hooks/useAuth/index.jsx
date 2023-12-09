import { useCallback, useState } from 'react';

import { checkToken } from '../../services/event-manager/api';
import { AUTHORIZATION_KEY } from '../../utils/auth/storage.constants';
import { getItemStorage } from '../../utils/auth/storage.proxy';

export function useAuth() {
  const [token] = useState(getItemStorage(AUTHORIZATION_KEY));

  const checkUserToken = useCallback(async (onSuccessFn, onErrorFn) => {
    await checkToken()
      .then((user) => {
        if (!user) {
          onErrorFn?.();
          return;
        }

        onSuccessFn?.(user);
      })
      .catch((err) => console.error(err.response.data));
  }, []);

  return { token, checkUserToken };
}
