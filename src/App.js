import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import {
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import Kingdom from "./components/Kingdom";
import Login from "./components/Login";
import Nav from "./components/Nav";

import {
  Input,
  Card,
  Button,
  Row,
} from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }

  onChange(event) {
    const state = this.state;
    state.user[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit(event) {
    const state = this.state;
  }

  render() {
    const token = localStorage.getItem('token');
    if (token === null) {
      return (
        <BrowserRouter className='App'>
          <div>
            <Route path="/" render={ props => <Login {...props} /> } />
          </div>
        </BrowserRouter>
      );
    }
    console.log('Token', token);

    return (
      <BrowserRouter className='App'>
        <div>
          <Route path="/" render={ props => <Nav {...props} /> } />
          <Route path="/kingdom" render={ props => <Kingdom {...props} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
