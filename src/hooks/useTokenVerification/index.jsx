import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { checkToken } from '../../services/event-manager/api';
import { setUser } from '../../store/user/reducer';

export function useTokenVerification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);

  const checkUserToken = useCallback(async () => {
    checkToken()
      .then((user) => {
        if (!user) {
          setChecking(false);
        } else {
          dispatch(setUser(user));
          navigate('/', { replace: true });
        }
      })
      .catch((err) => console.error(err.response.data));
  }, [dispatch, navigate]);

  return { checking, checkUserToken };
}
