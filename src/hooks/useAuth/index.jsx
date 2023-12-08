import { checkToken } from '../../services/event-manager/api';

export function useAuth() {
  const checkUserToken = async (onSuccessFn, onErrorFn) => {
    await checkToken()
      .then((user) => {
        if (!user) {
          onErrorFn?.();
          return;
        }

        onSuccessFn?.(user);
      })
      .catch((err) => console.error(err.response.data));
  };

  return { checkUserToken };
}
