import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: ''
    };

    this.findGetParameter = this.findGetParameter.bind(this);
  }

  componentDidMount() {
    this.setState({avatar: this.findGetParameter('avatar')});
    console.log('compDIDMOUNT', this.findGetParameter('avatar'));
  }

  findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    var items = location.search.substr(1).split('&');
    for (var index = 0; index < items.length; index++) {
      tmp = items[index].split('=');
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
  }

  render() {
    return (
      <div id="main">
        <div id="content">
          <header id="title">
            <h1>{'{ CodeEZ }'}</h1>
            <div id="subheader">Code setup that doesn't suck.</div>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
