import React from "react";
import Zoom from "react-reveal/Zoom";

const WinMessage = () => {
  return (
    <div>
      <div className="landing">
        <Zoom>
          <h1>You Won!!!</h1>
        </Zoom>
      </div>
    </div>
  );
};

export default WinMessage;
