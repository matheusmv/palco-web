import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container';
import DefaultFooter from '../../components/Footer/DefaultFooter';
import LoginForm from '../../components/Form/LoginForm';
import DefaultHeader from '../../components/Header/DefaultHeader';
import DefaultSpinner from '../../components/Spinner/DefaultSpinner';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const { ensureAuthenticated } = useAuth();

  useEffect(() => {
    ensureAuthenticated(
      () => {
        navigate('/', { replace: true });
      },
      () => {
        setLoading(false);
      },
    );
  }, [ensureAuthenticated, navigate]);

  if (loading) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-white)' }}>
        <DefaultSpinner />
      </Container>
    );
  }

  return (
    <Container style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
      <DefaultHeader />
      <LoginForm />
      <DefaultFooter />
    </Container>
  );
}

export default Login;
