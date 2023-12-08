import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { authUser } from '../../store/user/reducer';

import { AUTHORIZATION_KEY } from '../../utils/auth/storage.constants';
import { setItemStorage } from '../../utils/auth/storage.proxy';

import { authenticateUser } from '../../services/event-manager/api';

export function useLogin() {
  const dispatch = useDispatch();

  const [authDetails, setAuthDetails] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (e) => {
    setAuthDetails((state) => ({ ...state, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setAuthDetails((state) => ({ ...state, password: e.target.value }));
  };

  const executeAuthentication = async (onSuccessFn, onErrorFn) => {
    await authenticateUser(authDetails)
      .then(async (res) => {
        setItemStorage(AUTHORIZATION_KEY, res.accessToken || '');

        dispatch(authUser(res));

        onSuccessFn?.();
      })
      .catch((err) => {
        const { data } = err.response;

        if (data.issues) {
          data.issues.forEach((issue) => {
            toast.error(issue.error);
          });
        } else {
          toast.error(data.message);
        }

        console.error(data);

        onErrorFn?.();
      });
  };

  return { authDetails, handleEmailChange, handlePasswordChange, executeAuthentication };
}
