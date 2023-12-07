import { CircleLoader } from 'react-spinners';

import './styles.css';

function DefaultSpinner() {
  return (
    <div className="DefaultSpinnerContainer">
      <CircleLoader color={'var(--clr-purple-medium)'} />
    </div>
  );
}

export default DefaultSpinner;
