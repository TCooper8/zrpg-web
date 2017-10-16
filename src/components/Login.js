import React, { Component } from 'react';

import {
  Input,
  Card,
  Button,
  Row,
} from 'react-materialize';

class Login extends Component {
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
    localStorage.setItem("token", "mytoken");
    window.location = "/dashboard";
  }

  render() {
    return (
      <div>
        <Card className='card-panel Login-panel'>
          <Row>
            <Input
              s={12}
              name='email'
              type='email'
              label='EmailAddress'
              onSubmit={ this.onSubmit.bind(this) }
              onChange={ this.onChange.bind(this) }
              />
            <Input
              s={12}
              name='password'
              type='password'
              label='Password'
              onChange={ this.onChange.bind(this) }
              />
            <Button
              label="Login"
              onClick={ this.onSubmit.bind(this) }
              >Login</Button>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Login;

