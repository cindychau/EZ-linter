import React, { Component } from 'react';
import Config from './config.jsx';
import Instructions from './instructions.jsx';
import Code from './code.js';
import ourState from './state.js';

//importing buttons from lintercomponents folder
import ShareBtn from '../lintercomponents/ShareBtn.jsx';
import SignInBtn from '../lintercomponents/SignInBtn.jsx';
import SaveConfigBtn from '../lintercomponents/SaveConfigBtn.jsx';
import SavedConfigs from '../lintercomponents/SavedConfigs.jsx';

class mainWebpack extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      config: ourState,
      savedConfigs: [],
      isLoggedIn: false,
    };

    this.addSavedConfig = this.addSavedConfig.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  addSavedConfig(configObj) {
    this.setState({ savedConfigs: this.state.savedConfigs.concat(configObj) });
  }

  updateCode(header, rule){
    console.log(header, rule);
    let newBool;
    const currBool = this.state.config[header][rule];
    newBool = !currBool;

    this.setState({...this.state, config: {
      ...this.state.config,
      [header]: {
        ...this.state.config[header],
        [rule]: newBool,
      },
    }});
  }

  render() {

    const { config } = this.state;

    return (
      <div id='mainwebpack'>

        <div id="topButtons">
          {this.state.isLoggedIn ? (
            <SaveConfigBtn
              config={this.state.config}
              addSavedConfig={this.addSavedConfig}
              savedConfigs={this.state.savedConfigs}
            />
          ) : null}
          <ShareBtn config={config} />
          <SignInBtn isLoggedIn={this.state.isLoggedIn} />
        </div>

        <div id="content">
          <header id="title">
            <h1>{'{ EZ-pack }'}</h1>
            <div id="subheader">Webpack configs that don't suck.</div>
          </header>
          {this.state.isLoggedIn ? (
            <div>
              {this.state.savedConfigs.length ? <h3>Saved Configs:</h3> : null}
              <SavedConfigs
                configs={this.state.savedConfigs}
                // loader={this.loadUserConfig}
                // remover={this.removeSavedConfig}
              />
            </div>
          ) : null}
          <div id='webpackcontent'>
            <Config headers={Object.entries(this.state.config)} updateCode={this.updateCode} />
            <Code />
          </div>
          <Instructions />
        </div>

      </div>

    );
  }
}

export default mainWebpack;
