import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAndHideNotification } from './reducer';

class Component1 extends Component {
  constructor() {
    super();
    this.doThingAndShowAndNotification = this.doThingAndShowAndNotification.bind(this);
  }

  doThingAndShowAndNotification() {
    // This setTimeout simulates any async operation, e.g. an axios call.
    setTimeout(() => {
      this.props.showAndHideNotification('Did thing from component 1');
      // This setTimeout has nothing to do with the axios call. We just want to show the notification for a certain amount of time and then hide it.
      setTimeout(() => {
        this.props.showAndHideNotification();
      }, 1500)
    }, 1500);
  }

  render() {
    return (
      <button onClick={this.doThingAndShowAndNotification}>Do thing and show notification 1</button>
    );
  }
};

const mapDispatchToProps = {
  showAndHideNotification: showAndHideNotification
};

export default connect(null, mapDispatchToProps)(Component1);
