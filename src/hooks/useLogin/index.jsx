import { useState } from 'react';
import { authenticateUser } from '../../services/event-manager/api';
import { setItemStorage } from '../../utils/auth/storage.proxy';
import { AUTHORIZATION_KEY } from '../../utils/auth/storage.constants';
import { useDispatch } from 'react-redux';
import { authUser } from '../../store/user/reducer';
import { toast } from 'react-toastify';

export function useLogin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const executeAuthentication = async (onSuccessFn, onErrorFn) => {
    await authenticateUser(email, password)
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

  return { email, password, handleEmailChange, handlePasswordChange, executeAuthentication };
}
