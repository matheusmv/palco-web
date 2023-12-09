import './styles.css';

import { CircleLoader } from 'react-spinners';

function DefaultSpinner() {
  return (
    <div className="DefaultSpinnerContainer">
      <CircleLoader color={'var(--clr-purple-medium)'} />
    </div>
  );
}

export default DefaultSpinner;
