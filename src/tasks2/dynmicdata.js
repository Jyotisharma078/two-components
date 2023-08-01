import React, { useState } from 'react';

const dynmic = {
     width: '100%',
    height: '100px',
    backgroundColor:'aqua',
    color:'black',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign:'center',
};
const Dynmicdata = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={dynmic} alt="dynmic">
      <input type="text"value={inputValue} onChange={handleChange} placeholder="Enter value"/>
      <span>{inputValue}</span>
    </div>
  );
};

export default Dynmicdata;
