import React from 'react';
import RubberBand from "react-reveal/RubberBand";

const Card = (props) => {
  let style = {};
  if(props.showing) {
    style.backgroundColor = props.backgroundColor;
  }
  return(
    <RubberBand>
      <div onClick={props.handleClick} style={style}></div>
    </RubberBand> 
  )
}

export default Card;