import React, { Component } from 'react';
import Header from './header.js';

function Config(props) {
  // destructuring properties passed down from props
  const headers = [];

  //props.header is the state object
  //label is prop that passes down the values of the props.header key
  for(let i = 0; i < props.headers.length; i++){
    headers.push(<Header label={props.headers[i][0]} key={props.headers[i][0]} updateCode={props.updateCode} rules={props.headers[i][1]}/>)
  }

  return (
    <div id='configDropdown'>
      {headers}
    </div>
  );
}

export default Config;
