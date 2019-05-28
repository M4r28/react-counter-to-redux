import React, { Component } from 'react';
import {connect} from 'react-redux';
import { execSync } from 'child_process';

class Footer extends Component {
  render() {
    return (
      <div>
        Last update: {this.props.date ? this.props.date.toString(): "Not yet"}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(Footer)