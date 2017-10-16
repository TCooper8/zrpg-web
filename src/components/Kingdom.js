import React, { Component } from 'react';

import {
  Input,
  Card,
  Button,
  Row,
  Col,
  Table,
} from 'react-materialize';

class Kingdom extends Component {
  render() {
    return (
      <div>
        <Card
          className='blue-grey darken-1'
          textClassName='white-text'
          title='Heroes'
          >
          <Row>
            <Row>
              Goclsmacl level 10 Troll Warrior
            </Row>
            <Row>
              Roshapat level 15 Tauren Shaman
            </Row>
            <Row s={2}>
              Skulda level 10 Orc Hunter
            </Row>
          </Row>
          </Card>
        <Card
          className='blue-grey darken-1'
          textClassName='white-text'
          title='Income'
          >
          <Row>
            <Row s={2}>
              100 Gold
            </Row>
            <Row s={2}>
              50 Lumber
            </Row>
            <Row s={2}>
              75 Food
            </Row>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Kingdom;