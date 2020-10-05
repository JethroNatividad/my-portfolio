import { Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import logo from './logo.png';

import Project from './Project';
function App() {
  return (
    <div className='app'>
      <div className='app__header'>
        <img className='app__headerLogo' src={logo} alt='logo' />
        <div className='app__headerLinks'>
          {['About', 'Header', 'Skills', 'Contact'].map((item) => (
            <a href={`#${item}`}>{item}</a>
          ))}
        </div>
      </div>
      <div className='app__intro'>
        <div className='app__introContainer'>
          <img className='app__introLogo' src={logo} alt='logo' />
          <h1 className='app__introName'>Jethro Natividad</h1>
          <h1 className='app__introText'>Let's build something together</h1>
        </div>
      </div>
      <div className='app__about'>
        <div className='app__aboutContainer'>
          <div className='app__tag'>- about</div>
          <div className='app__aboutContainer2'>
            <h1 className='app__aboutText'>
              Lorem ipsum Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem
            </h1>
            <h2 className='app__aboutEmail'>Natividad.jethro69@gmail.com</h2>
          </div>
          <div className='app__aboutSocial'>
            {[
              { display: 'LinkedIn', link: '#' },
              { display: 'Github', link: '#' },
            ].map((item) => (
              <a href={item.link}>{item.display}</a>
            ))}
          </div>
        </div>
      </div>
      <div className='app__projects'>
        <div className='app__projectsContainer'>
          <div className='app__projectsTag'>- Projects</div>
          <div className='app__projectsList'>
            <Project />
            <Project />
          </div>
        </div>
      </div>
      <div className='app__skills'>
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

      {/* Contact section */}
      {/* Form */}
      {/* username */}
      {/* email */}
      {/* message */}
      {/* send button */}
    </div>
  );
}

export default App;
