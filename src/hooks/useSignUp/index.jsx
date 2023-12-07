import { useState } from 'react';
import { registerUser } from '../../services/event-manager/api';
import { toast } from 'react-toastify';

export function useSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const executeSignUp = async (onSuccessFn, onErrorFn) => {
    await registerUser(email, password)
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

  return { email, password, handleEmailChange, handlePasswordChange, executeSignUp };
}
