import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container';
import DefaultFooter from '../../components/Footer/DefaultFooter';
import LoginForm from '../../components/Form/LoginForm';
import DefaultHeader from '../../components/Header/DefaultHeader';
import DefaultSpinner from '../../components/Spinner/DefaultSpinner';
import { useAuth } from '../../hooks/useAuth';
import { clearStorage } from '../../utils/auth/storage.proxy';

function Login() {
  const [loading, setLoading] = useState(true);
  const { checkUserToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    checkUserToken(
      () => {
        navigate('/', { replace: true });
      },
      () => {
        clearStorage();
        setLoading(false);
      },
    );
  }, [checkUserToken, navigate]);

  if (loading) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-white)' }}>
        <DefaultSpinner />
      </Container>
    );
  }

  return (
    <Container style={{ flexDirection: 'column', alignItems: 'center' }}>
      <DefaultHeader />
      <LoginForm />
      <DefaultFooter />
    </Container>
  );
}

export default Login;
