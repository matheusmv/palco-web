import PropTypes from 'prop-types';

import NormalText from '../../Text/NormalText';

import PersonIcon from '@mui/icons-material/Person';

import './styles.css';

function ProfileInfo({ username = 'Username', role = 'Role' }) {
  return (
    <div className="ProfileInfoContainer">
      <div className="ProfileInfo-icon-container">
        <PersonIcon className="ProfileInfo-icon" />
      </div>
      <div className="ProfileInfo-details">
        <NormalText className="ProfileInfo-username" content={username} />
        <NormalText className="ProfileInfo-role" content={role} />
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {
  username: PropTypes.string,
  role: PropTypes.string,
};

export default ProfileInfo;
