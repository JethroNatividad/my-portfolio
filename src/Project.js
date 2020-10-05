import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { Button, Typography } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import './Project.css';
import useStyles from './Project.styles';
function Project() {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleIsFlipped = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Card
        className={`${classes.root} ${classes.front}`}
        onClick={toggleIsFlipped}
      ></Card>
      <Card
        className={`${classes.root} ${classes.back}`}
        onClick={toggleIsFlipped}
      >
        <Typography variant='h5' className={classes.title}>
          Title goes here
        </Typography>

        <Typography variant='p' className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
          vestibulum nibh. Praesent eleifend diam at neque elementum, tincidunt
          varius purus sodales. Sed eu urna quis ipsum bibendum semper. Aenean
          maximus, nisl non maximus viverra, sem sem tempus ex, eu laoreet
          lectus lacus consequat nisi. Ut pretium dignissim pretium.
        </Typography>

        <Typography variant='p'>Technologies used: Reactjs, NodeJs</Typography>

        <div className='buttonsContainer'>
          <Button variant='contained'>Preview</Button>
          <Button variant='contained'>See live</Button>
          <Button variant='contained'>Source</Button>
        </div>
      </Card>
    </ReactCardFlip>
  );
}

export default Project;
