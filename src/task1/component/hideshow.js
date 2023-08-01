import React, { useState } from 'react';
import Component1 from '../component/Component1';
import Component2 from '../component/Component2';


const Hide = {
   width: '100%',
   height: '100px',
   backgroundColor:'green',
   color:'black',
   paddingTop: '10px',
   textAlign:'center',
   paddingBottom:'20px',
};

const Hideshow = () => {
    const [showComponent1, setShowComponent1] = useState(true);


    const handleToggle = () => {
        setShowComponent1((prevState) => !prevState);

    };

    return (
        <div style={Hide} alt="Hide">
            {showComponent1 ? <Component1 /> : <Component2 />}

            <button onClick={handleToggle}>Toggle Components</button>

        </div>

    );
};

export default Hideshow;
