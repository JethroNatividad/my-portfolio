import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import useStyles from './About.styles';
function About() {
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'About'}>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className='app__tag'>- about</div>
          <div className={classes.innerContainer}>
            <h1 className={classes.text}>
              Lorem ipsum Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem
            </h1>
            <h2 className={classes.email}>Natividad.jethro69@gmail.com</h2>
          </div>
          <div className={classes.social}>
            {[
              { display: 'LinkedIn', link: '#' },
              { display: 'Github', link: '#' },
            ].map((item) => (
              <a href={item.link}>{item.display}</a>
            ))}
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default About;
