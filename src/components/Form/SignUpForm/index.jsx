import './styles.css';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useSignUp } from '../../../hooks/useSignUp';
import CustomButton from '../../Button/CustomButton';
import PasswordInput from '../../Input/PasswordInput';
import TextInput from '../../Input/TextInput';
import LinkText from '../../Text/LinkText';
import NormalText from '../../Text/NormalText';

function SignUpForm() {
  const { userDetails, handleEmailChange, handlePasswordChange, executeSignUp } = useSignUp();

  const navigate = useNavigate();

  const submitHandler = async () => {
    executeSignUp(() => {
      toast.success('Conta criada com sucesso');
      navigate('/login', { replace: true });
    });
  };

  return (
    <div className="SignUpFormContainer">
      <h2 className="SignUpFormTitle">Criar Conta</h2>
      <form className="SignUpForm">
        <TextInput
          className="SignUpFormInput"
          value={userDetails.email}
          placeHolder={'E-mail'}
          onChangeFn={handleEmailChange}
        />
        <PasswordInput
          className="SignUpFormInput"
          value={userDetails.password}
          placeHolder={'Senha'}
          onChangeFn={handlePasswordChange}
          bottomMessage={
            <LinkText className="SignUpFormPasswordAllert" content={'Mínimo de 5 caracteres, sem espaços em branco'} />
          }
        />
      </form>
      <div className="SignUpFormSubmitButtonContainer">
        <CustomButton className="FormSubmitButton" text="ENTRAR" onClickFn={() => submitHandler()} />
      </div>
      <div className="SignUpFormBottomMessage">
        <NormalText className="FormBottomMessage" content={'Já possui uma conta?'} />
        <LinkText to={'/login'} className="FormBottomLink" content={'ENTRAR'} />
      </div>
    </div>
  );
}

export default SignUpForm;
