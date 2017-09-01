import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Buttons extends Component {
  render() {
    return (
      <div>
          <Button bsStyle="primary" bsSize="large" onClick={this.props.onActionClick.bind(this,'come')} disabled={JSON.parse(this.props.come)}>Я пришел</Button>
          <Button bsStyle="default" bsSize="large" onClick={this.props.onActionClick.bind(this,'gone')} disabled={JSON.parse(this.props.gone)}>Я ушел</Button>
      </div>
    )
  }
}

export default Buttons