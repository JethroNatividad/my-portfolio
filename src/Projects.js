import React from 'react';
import Project from './Project';
import useStyles from './Projects.styles';
import ScrollableAnchor from 'react-scrollable-anchor';
import SectionTag from './SectionTag';

import { ProjectsData } from './content';
function Projects() {
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'Projects'}>
      <div className={classes.root}>
        <div className={classes.container}>
          <SectionTag name='projects' light />
          <div className={classes.list}>
            {/*  title, description, imageUrl, gif, siteUrl, github  */}
            {ProjectsData.map((project) => (
              <Project {...project} />
            ))}
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Projects;
