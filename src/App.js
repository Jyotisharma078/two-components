import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  const [hide, sethide] = useState(false);

  return (
    <>
      {show ? <h1>Welcome to CodeSandBox</h1> : null}
      {hide ? <h1>Welcome to Box</h1> : null}
      <button onClick={() => setShow(!show)}>show</button>
      <button onClick={() => sethide(!hide )}>hide</button>
    </>
  );
};

export default App;
