import TextInput from '../../Input/TextInput';
import PasswordInput from '../../Input/PasswordInput';
import CustomButton from '../../Button/CustomButton';
import NormalText from '../../Text/NormalText';
import LinkText from '../../Text/LinkText';

import './styles.css';

function SignUpForm() {
  return (
    <div className="SignUpFormContainer">
      <h2 className="SignUpFormTitle">Criar Conta</h2>
      <form className="SignUpForm">
        <TextInput className="SignUpFormInput" placeHolder={'E-mail'} />
        <PasswordInput
          className="SignUpFormInput"
          placeHolder={'Senha'}
          bottomMessage={
            <LinkText className="SignUpFormPasswordAllert" content={'Mínimo de 5 caracteres, sem espaços em branco'} />
          }
        />
      </form>
      <div className="SignUpFormSubmitButtonContainer">
        <CustomButton className="FormSubmitButton" text="ENTRAR" />
      </div>
      <div className="SignUpFormBottomMessage">
        <NormalText className="FormBottomMessage" content={'Já possui uma conta?'} />
        <LinkText className="FormBottomLink" content={'ENTRAR'} />
      </div>
    </div>
  );
}

export default SignUpForm;
