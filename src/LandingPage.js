import React from "react";

const LandingPage = ({handleStart}) => {
  return (
    <div className='landing'>
      <h1>ColorMatch</h1>
      <p><i>Find the correct pairs of colours to win the game.</i></p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default LandingPage;
