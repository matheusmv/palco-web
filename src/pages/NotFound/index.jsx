import './styles.css';

import { useNavigate } from 'react-router';

import CustomButton from '../../components/Button/CustomButton';
import Container from '../../components/Container';
import DefaultFooter from '../../components/Footer/DefaultFooter';
import NormalText from '../../components/Text/NormalText';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="NotFoundMessageCard">
        <NormalText
          className="NotFoundMessage"
          content={'A página que você está procurando não pode ser encontrada.'}
        />
        <NormalText className="NotFoundMessageStatusCode" content={'404'} />
        <CustomButton text={'VOLTAR'} onClickFn={() => navigate(-1)} />
      </div>
      <DefaultFooter />
    </Container>
  );
}

export default NotFound;
