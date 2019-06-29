import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './pages/SmurfPage';
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

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        
        <Link to="/">Home</Link>
        <Link to="/addSmurf">Add Smurf</Link>
        <Route path="/addSmurf" component={SmurfForm} />
        <Route
          path="/"
          component={() => <Smurfs smurfs={this.state.smurfs} />}
          exact
        />
        <Route
          path="/smurf/:id"
          component={SmurfPage}
          smurfs={this.state.smurfs}
        />
      </div>
    );
  }
}
export default App;