import React from 'react';
import Project from './Project';
import useStyles from './Projects.styles';
import ScrollableAnchor from 'react-scrollable-anchor';
function Projects() {
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'Projects'}>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className='app__projectsTag'>- Projects</div>
          <div className={classes.list}>
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Projects;
