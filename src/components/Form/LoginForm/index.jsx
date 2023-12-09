import './styles.css';

import { useNavigate } from 'react-router-dom';

import { useLogin } from '../../../hooks/useLogin';
import CustomButton from '../../Button/CustomButton';
import PasswordInput from '../../Input/PasswordInput';
import TextInput from '../../Input/TextInput';
import LinkText from '../../Text/LinkText';
import NormalText from '../../Text/NormalText';

function LoginForm() {
  const { authDetails, handleEmailChange, handlePasswordChange, executeAuthentication } = useLogin();

  const navigate = useNavigate();

  const submitHandler = async () => {
    const from = location.state?.from.pathname || '/';
    executeAuthentication(() => navigate(from, { replace: true }));
  };

  return (
    <div className="LoginFormContainer">
      <h2 className="LoginFormTitle">Login</h2>
      <form className="LoginForm">
        <TextInput
          className="LoginFormInput"
          value={authDetails.email}
          placeHolder={'E-mail'}
          onChangeFn={handleEmailChange}
        />
        <PasswordInput
          className="LoginFormInput"
          value={authDetails.password}
          placeHolder={'Senha'}
          onChangeFn={handlePasswordChange}
          bottomMessage={<LinkText className="LoginFormPasswordRecoveryLink" content={'Esqueceu a senha?'} />}
        />
      </form>
      <div className="LoginFormSubmitButtonContainer">
        <CustomButton className="FormSubmitButton" text="ENTRAR" onClickFn={() => submitHandler()} />
      </div>
      <div className="LoginFormBottomMessage">
        <NormalText className="FormBottomMessage" content={'Não possui uma conta?'} />
        <LinkText to={'/signup'} className="FormBottomLink" content={'CRIE UMA'} />
      </div>
    </div>
  );
}

export default LoginForm;
