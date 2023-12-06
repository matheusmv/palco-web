import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import './styles.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarState = () => {
    setIsOpen((s) => !s);
  };

  return (
    <div className={`Sidebar ${isOpen ? `Sidebar-open` : ''}`}>
      <div className={`Sidebar-header ${isOpen ? `Sidebar-header-open` : `Sidebar-header-closed`}`}>
        {getSidebarHeaderContent(isOpen, toggleSidebarState)}
      </div>
      <div className="Sidebar-divider"></div>
      <div className="Sidebar-body"></div>
    </div>
  );
}

function getSidebarHeaderContent(isOpen = false, onClickFn) {
  if (!isOpen) {
    return <MenuIcon className="Sidebar-menu-icon" onClick={onClickFn} />;
  }

  return (
    <>
      <div className="Sidebar-header-title">Palco Web</div>
      <CloseIcon className="Sidebar-close-icon" onClick={onClickFn} />
    </>
  );
}

export default Sidebar;
