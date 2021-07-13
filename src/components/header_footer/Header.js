import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  // jalankan handleScroll ketika scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (value) => {
    setOpen(value);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0px',
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>
        <IconButton arial-label="Menu" color="inherit">
          <MenuIcon onClick={() => toggleDrawer(true)} />
        </IconButton>
        <SideDrawer open={open} onClose={(val) => toggleDrawer(val)} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
