import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import Container from '../../components/Container';
import DefaultHeader from '../../components/Header/DefaultHeader';
import SignUpForm from '../../components/Form/SignUpForm';
import DefaultFooter from '../../components/Footer/DefaultFooter';

function SignUp() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  return (
    <Container style={{ flexDirection: 'column', alignItems: 'center' }}>
      <DefaultHeader />
      <SignUpForm />
      <DefaultFooter />
    </Container>
  );
}

export default SignUp;