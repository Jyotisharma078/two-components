import React, { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

const App = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  

  const handleToggle = () => {
    setShowComponent1((prevState) => !prevState);
    
  };

  return (
    <div>
      {showComponent1 ? <Component1 /> : <Component2 />}
      
      <button onClick={handleToggle}>Toggle Components</button>
    </div>
  );
};

export default App;

