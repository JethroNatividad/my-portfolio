import React from 'react';
import Project from './Project';
import useStyles from './Projects.styles';
function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className='app__projectsTag'>- Projects</div>
        <div className={classes.list}>
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Projects;
