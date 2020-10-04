import React from 'react';
import './App.css';
import logo from './logo.png';
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
          <div className='app__aboutTag'>- about</div>
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
      {/* Projects section */}
      {/* - projects */}
      {/* List of projects */}
      {/* Flippable card Project */}
      {/* Front: */}
      {/* IMAGE */}
      {/* Back: */}
      {/* title */}
      {/* description */}
      {/* technologies used */}
      {/* preview button */}
      {/* see live button */}
      {/* source code button */}

      {/* Skills section */}
      {/* Skills list */}
      {/* technologies list */}
      {/* some text */}

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
