import { useNavigate } from 'react-router-dom';

import { useLogin } from '../../../hooks/useLogin';

import TextInput from '../../Input/TextInput';
import PasswordInput from '../../Input/PasswordInput';
import CustomButton from '../../Button/CustomButton';
import NormalText from '../../Text/NormalText';
import LinkText from '../../Text/LinkText';

import './styles.css';

function LoginForm() {
  const navigate = useNavigate();

  const { email, password, handleEmailChange, handlePasswordChange, executeAuthentication } = useLogin();

  const submitHandler = async () => {
    const from = location.state?.from.pathname || '/';
    executeAuthentication(() => navigate(from, { replace: true }));
  };

  return (
    <div className="LoginFormContainer">
      <h2 className="LoginFormTitle">Login</h2>
      <form className="LoginForm">
        <TextInput className="LoginFormInput" value={email} placeHolder={'E-mail'} onChangeFn={handleEmailChange} />
        <PasswordInput
          className="LoginFormInput"
          value={password}
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
