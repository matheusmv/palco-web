import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container';
import DefaultFooter from '../../components/Footer/DefaultFooter';
import SignUpForm from '../../components/Form/SignUpForm';
import DefaultHeader from '../../components/Header/DefaultHeader';
import { useAuth } from '../../hooks/useAuth';

function SignUp() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  return (
    <Container style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
      <DefaultHeader />
      <SignUpForm />
      <DefaultFooter />
    </Container>
  );
}

export default SignUp;
