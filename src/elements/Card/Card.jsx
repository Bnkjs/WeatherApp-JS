import React from 'react';
import 'elements/Card/Card.scss';
export const Card = (props) =>{

return (
  <div id="card-container">
    {props.children}
  </div>)
}