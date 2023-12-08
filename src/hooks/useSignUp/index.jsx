import { useState } from 'react';
import { registerUser } from '../../services/event-manager/api';
import { toast } from 'react-toastify';

export function useSignUp() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (e) => {
    setUserDetails((state) => ({ ...state, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setUserDetails((state) => ({ ...state, password: e.target.value }));
  };

  const executeSignUp = async (onSuccessFn, onErrorFn) => {
    await registerUser(userDetails)
      .then(() => {
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

        console.log(data);

        onErrorFn?.();
      });
  };

  return { userDetails, handleEmailChange, handlePasswordChange, executeSignUp };
}
