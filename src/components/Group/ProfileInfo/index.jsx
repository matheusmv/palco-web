import PropTypes from 'prop-types';

import { useState } from 'react';

import { useLogout } from '../../../hooks/useLogout';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { Logout } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';

import NormalText from '../../Text/NormalText';

import './styles.css';

function ProfileInfo({ username = 'Username', role = 'Role' }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = useLogout();

  return (
    <div className="ProfileInfoContainer">
      <div className="ProfileInfo-icon-container">
        <PersonIcon className="ProfileInfo-icon" onClick={handleClick} />
      </div>
      <div className="ProfileInfo-details">
        <NormalText className="ProfileInfo-username" content={username} />
        <NormalText className="ProfileInfo-role" content={role} />
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={styles.menuSlotProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => logout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </div>
  );
}

const styles = {
  menuSlotProps: {
    paper: {
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    },
  },
};

ProfileInfo.propTypes = {
  username: PropTypes.string,
  role: PropTypes.string,
};

export default ProfileInfo;
