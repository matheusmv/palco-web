import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStorage } from '../../utils/auth/storage.proxy';
import { clearUser } from '../../store/user/reducer';

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    clearStorage();
    dispatch(clearUser());
    navigate('/login', { replace: true });
  }, [dispatch, navigate]);

  return logout;
}
