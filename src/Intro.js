import React from 'react';
import useStyles from './Intro.styles';
import logo from './logo.png';

function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.logo} src={logo} alt='logo' />
        <h1 className={classes.name}>Jethro Natividad</h1>
        <h1 className={classes.text}>Let's build something together</h1>
      </div>
    </div>
  );
}

export default Intro;
