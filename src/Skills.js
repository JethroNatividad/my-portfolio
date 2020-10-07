import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Skills.styles';
import ScrollableAnchor from 'react-scrollable-anchor';
import { SkillsData } from './content';
function Skills() {
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'Skills'}>
      <div className={classes.root}>
        <div className='app__skillsList'>
          <Typography variant='h5'>Skills</Typography>
          {SkillsData.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </div>
        <div className='app__technologiesList'>
          <Typography variant='h5'>Technology</Typography>
          {SkillsData.technology.map((tech) => (
            <li>{tech}</li>
          ))}
        </div>
        <div className='app__skillsText'>
          <Typography variant='h5'>~</Typography>
          <p>{SkillsData.text}</p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Skills;
