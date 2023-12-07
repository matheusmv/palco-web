import { useEffect } from 'react';

import { useTokenVerification } from '../../hooks/useTokenVerification';

import Container from '../../components/Container';
import DefaultHeader from '../../components/Header/DefaultHeader';
import SignUpForm from '../../components/Form/SignUpForm';
import DefaultFooter from '../../components/Footer/DefaultFooter';
import DefaultSpinner from '../../components/Spinner/DefaultSpinner';

function Login() {
  const { checking, checkUserToken } = useTokenVerification();

  useEffect(() => {
    checkUserToken();
  }, [checkUserToken]);

  if (checking) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-white)' }}>
        <DefaultSpinner />
      </Container>
    );
  }

  return (
    <Container style={{ flexDirection: 'column', alignItems: 'center' }}>
      <DefaultHeader />
      <SignUpForm />
      <DefaultFooter />
    </Container>
  );
}

export default Login;
