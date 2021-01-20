import React, { Component } from 'react';
import Import from './import.js';
import Module from './module.js';
import Plugin from './plugin.js';

const defaultWebpack =
`const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;`;

class Code extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    
    render(){
        return(
            <div id='webpackcode'>
                <pre>
                    <code>
                        <Import name='webpack' path='webpack' />
                        <Import name='path' path='path' />
                        <br/>
                        <span style={{color:'#9d4edd'}} >const</span> config = {'{'} <br/>
                            {'    '}entry: <span style={{color:'#2a9d8f'}} > './src/index.js'</span>, <br/>
                            {'    '}output: {'{'} <br/>
                            {'    '}{'    '}path: path.<span style={{color:'#f4a261'}} >resolve</span>(__dirname, <span style={{color:'#2a9d8f'}} >'dist'</span>), <br/>
                            {'    '}{'    '}filename: <span style={{color:'#2a9d8f'}} >'bundle.js'</span> <br/>
                            {'    '}{'}'},<br/>
                            {'    '}module: {'{'} <br/>
                            {'    '}{'    '}rules: [
                            <Module file='/\.css$/' useArray={`'style-loader','css-loader'`}/>
                            {'    '}{'    '}]<br/>
                            {'    '}{'}'}<br/>
                        {'}'} <br/>
                        <br/>
                        module.exports = config;
                    </code>
                </pre>
            </div>
        );
    }
}

export default Code;