import React, { Component } from 'react';
import styles from './Nav.css';
import {
  Navbar,
  NavItem,
  Card,
  Button,
  Row,
} from 'react-materialize';

class Nav extends Component {
  render() {
    return (
      <Navbar className='Nav' brand='ZRPG' right>
        <NavItem href="/kingdom">Kingdom</NavItem>
      </Navbar>
    );
  }
}

export default Nav;