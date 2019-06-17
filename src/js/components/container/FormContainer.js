import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Input from '../presentational/Input.js';

class FormContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form id="article-form">
        <Input 
          text="Example text"
          label="example_text"
          type="text"
          id="example_text"
          value={ this.state.title }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default FormContainer;