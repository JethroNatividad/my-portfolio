import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from './logo.png';
import useStyles from './Header.styles';
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt='logo' />
      <div className={classes.links}>
        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a href={`#${item}`}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Header;
