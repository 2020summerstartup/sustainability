import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
 
class CompetePage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: {},
    };
  }
 
  render() {
    return (
      <div>
        <h1>Competition! Yay!<span role="img" aria-label="Trophy">🏆</span></h1>
      </div>
    );
  }
}
 
export default withFirebase(CompetePage);