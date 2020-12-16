import React, { Component } from 'react';
import  {NavLink} from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends React.Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
        {this.props.smurfs
            ? this.props.smurfs.map(smurf => {
                return (
                  <NavLink to="/form"><Smurf
                    key={smurf.id}
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    smurfs={this.props.smurfs}
                  />    /></NavLink>
                );
              })
            : 'loading...'}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
