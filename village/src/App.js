import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
class App extends Component {
  constructor(props) {
    super(props);
    let match = props.match; 
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }));
  }

  addSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf)
         .then(res => this.setState({smurf, smurfs: res.data}))
         .catch(err => console.log(err))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form">Add Smurf</NavLink>
        </nav>
        <Route path="/form" render= {(props) =>
        <SmurfForm
        {...props}
        addSmurf={this.addSmurf}/>}/>
        <Route exact path="/" render={(props) => <Smurfs
        {...props}
        smurfs={this.state.smurfs}/>}/>
      </div>
    );
  }
}

export default App;