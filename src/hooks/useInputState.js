import { useState } from 'react';
export default (initialVal) => {
  const [state, setState] = useState(initialVal);
  const handleChange = (evt) => {
    setState(evt.target.value);
  };
  const reset = () => {
    setState('');
  };
  return [state, handleChange, reset];
};
