import React from 'react';
import './SectionTag.css';
function SectionTag({ name, light = false }) {
  return (
    <div className='sectionTag'>
      <p className={`sectionTag__text ${light && 'light'}`}>{name}</p>
    </div>
  );
}

export default SectionTag;
