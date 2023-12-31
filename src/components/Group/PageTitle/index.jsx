import './styles.css';

import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import CustomButton from '../../Button/CustomButton';
import EventRegistrationForm from '../../Form/EventRegistrationForm';
import NormalText from '../../Text/NormalText';

function PageTitle({ title }) {
  const { admin } = useSelector((state) => state.userReducer);

  const [formOpen, setFormOpen] = useState(false);

  const toggleFormState = () => {
    setFormOpen((s) => !s);
  };

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
          onClickFn={() => toggleFormState()}
        />
      )}
      {formOpen && <EventRegistrationForm onCloseFn={() => toggleFormState()} />}
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PageTitle;
