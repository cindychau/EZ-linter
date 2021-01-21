import React, { Component } from 'react';
import Config from './config.jsx';
import Instructions from './instructions.jsx';
import Code from './code.js';
import ourState from './state.js';
import ourProps from './properties.js';

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
      props: ourProps,
      savedConfigs: [],
      imports: [],
      modules: [],
      plugins: [],
      isLoggedIn: false,
    };

    this.addSavedConfig = this.addSavedConfig.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  addSavedConfig(configObj) {
    this.setState({ savedConfigs: this.state.savedConfigs.concat(configObj) });
  }

  updateCode(header, rule){
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

    if (!newBool)
      return;

    if (this.state.props[rule].hasOwnProperty('import')){
      let newImports = [...this.state.imports];
      newImports.push(this.state.props[rule].import);
      this.setState({...this.state, imports: newImports});
    }

    if (this.state.props[rule].hasOwnProperty('module')){
      let newModules = [...this.state.modules];
      newModules.push(this.state.props[rule].module);
      this.setState({...this.state, modules: newModules});
    }

    if (this.state.props[rule].hasOwnProperty('plugin')){
      let newPlugins = [...this.state.plugins];
      newPlugins.push(this.state.props[rule].plugin);
      this.setState({...this.state, plugins: newPlugins});
    }

    console.log(this.state.modules);

    // let allRules = [];
    // Object.entries(this.state.config).forEach(header=>{
    //   allRules.push(header[1]);
    // })

    // allRules = allRules.reduce((acc, curr)=>{
    //   return Object.assign(acc, curr)
    // }, {});

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
              />
            </div>
          ) : null}
          <div id='webpackcontent'>
            <Config headers={Object.entries(this.state.config)} updateCode={this.updateCode} />
            <Code imports={this.state.imports} modules={this.state.modules} plugins={this.state.plugins} />
          </div>
          <Instructions />
        </div>

      </div>

    );
  }
}

export default mainWebpack;
