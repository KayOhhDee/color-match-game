import React from "react";

const LandingPage = ({handleStart}) => {
  return (
    <div className='landing'>
      <h1>ColorMatch</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default LandingPage;
