import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div id='main'>
      <div id="content">
          <header id="title">
            <h1>{'{ CodeEZ }'}</h1>
            <div id="subheader">Code setup that doesn't suck.</div>
          </header>
      </div>
    </div>;
  }
}

export default Home;
