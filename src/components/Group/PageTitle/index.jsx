import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';

import CustomButton from '../../Button/CustomButton';

import './styles.css';
import NormalText from '../../Text/NormalText';

function PageTitle({ title }) {
  const { admin } = useSelector((state) => state.userReducer);

  return (
    <div className="PageTitleContainer">
      <h1 className="PageTitle">{title || 'Title'}</h1>
      {admin && (
        <CustomButton
          className="AddNewEventButton"
          text={
            <>
              <AddIcon fontSize="small" /> <NormalText content={'Novo Evento'} style={{ color: 'var(--clr-white)' }} />
            </>
          }
        />
      )}
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PageTitle;
