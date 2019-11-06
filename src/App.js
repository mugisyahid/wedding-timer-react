/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import './App.css';

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const swaggerAPI = "https://kel1-akpsi-sc-2019-be.herokuapp.com/v2/api-docs"
// const swaggerAPI = process.env.REACT_APP_SERVER

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div>
        server: <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={`${swaggerAPI}`} />
       <SwaggerUI url={`${this.state.value ? this.state.value + '/v2/api-docs' : swaggerAPI}`} />
      </div>
    );
  }
}

export default App;
