import TextInput from '../../Input/TextInput';
import PasswordInput from '../../Input/PasswordInput';
import CustomButton from '../../Button/CustomButton';
import NormalText from '../../Text/NormalText';
import LinkText from '../../Text/LinkText';

import './styles.css';

function LoginForm() {
  return (
    <div className="LoginFormContainer">
      <h2 className="LoginFormTitle">Login</h2>
      <form className="LoginForm">
        <TextInput className="LoginFormInput" placeHolder={'E-mail'} />
        <PasswordInput
          className="LoginFormInput"
          placeHolder={'Senha'}
          bottomMessage={
            <LinkText
              className="LoginFormPasswordRecoveryLink"
              content={'Esqueceu a senha?'}
              style={{ color: 'var(--clr-blue)' }}
            />
          }
        />
      </form>
      <div className="LoginFormSubmitButtonContainer">
        <CustomButton className="FormSubmitButton" text="ENTRAR" />
      </div>
      <div className="LoginFormBottomMessage">
        <NormalText className="FormBottomMessage" content={'Não possui uma conta?'} />
        <LinkText className="FormBottomLink" content={'CRIE UMA'} />
      </div>
    </div>
  );
}

export default LoginForm;
