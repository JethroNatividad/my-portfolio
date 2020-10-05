import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { Button, Typography } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import './Project.css';
function Project() {
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleIsFlipped = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Card
        className='app__projectsCard Front'
        onClick={toggleIsFlipped}
      ></Card>
      <Card className='app__projectsCard Back' onClick={toggleIsFlipped}>
        <Typography variant='h5' className='app__projectsCardTitle'>
          Title goes here
        </Typography>
        {/* title */}
        {/* description */}
        <Typography variant='p' className='app__projectsCardDescription'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
          vestibulum nibh. Praesent eleifend diam at neque elementum, tincidunt
          varius purus sodales. Sed eu urna quis ipsum bibendum semper. Aenean
          maximus, nisl non maximus viverra, sem sem tempus ex, eu laoreet
          lectus lacus consequat nisi. Ut pretium dignissim pretium.
        </Typography>
        {/* technologies used */}
        <Typography variant='p'>Technologies used: Reactjs, NodeJs</Typography>
        {/* preview button */}
        <div className='buttonsContainer'>
          <Button variant='contained'>Preview</Button>
          <Button variant='contained'>See live</Button>
          <Button variant='contained'>Source</Button>
        </div>
        {/* see live button */}
        {/* source code button */}
      </Card>
    </ReactCardFlip>
  );
}

export default Project;
