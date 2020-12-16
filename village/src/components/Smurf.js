import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export const Smurf = props => {
  return (

  <div>
  <Route path="/" exact>
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  </Route>
  <Link to={`/smurf/${props.id}`} smurfs={props.smurfs}>
    Profile
  </Link>
</div>
);
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

