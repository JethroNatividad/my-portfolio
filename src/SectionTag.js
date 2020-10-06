import React from 'react';
import './SectionTag.css';
function SectionTag({ name }) {
  return (
    <div className='sectionTag'>
      <p className='sectionTag__text'>{name}</p>
    </div>
  );
}

export default SectionTag;
