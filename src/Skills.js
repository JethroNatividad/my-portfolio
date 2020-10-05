import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Skills.styles';
import ScrollableAnchor from 'react-scrollable-anchor';
function Skills() {
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'Skills'}>
      <div className={classes.root}>
        <div className='app__skillsList'>
          <Typography variant='h5'>Skills</Typography>
          <li>Programming</li>
          <li>Programming</li>
          <li>Programming</li>
          <li>Programming</li>
        </div>
        <div className='app__technologiesList'>
          <Typography variant='h5'>Technology</Typography>
          <li>Reactjs</li>
          <li>Reactjs</li>
          <li>Reactjs</li>
          <li>Reactjs</li>
        </div>
        <div className='app__skillsText'>
          <Typography variant='h5'>Text</Typography>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make
          </p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Skills;
