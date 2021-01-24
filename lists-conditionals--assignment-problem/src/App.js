import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lengthEnterText: 0,
      validate: false
    }

    this.checkEnterTextLength = this.checkEnterTextLength.bind(this);
    this.validateInputField = this.validateInputField.bind(this);
    this.resetValidation = this.resetValidation.bind(this);
  }

  checkEnterTextLength(event) {
    this.setState({
      text: event.target.value,
      lengthEnterText: event.target.value.length
    });
  }

  validateInputField() {
    this.setState({
      validate: true
    });
  }

  resetValidation() {
    this.setState({
      validate: false
    });
  }

  deleteCharFromEnterText = (charIndex) => {
    let text = this.state.text.concat();
    const textArray = text.split('')
    textArray.splice(charIndex, 1);
    text = textArray.join('');

    this.setState({
      text: text,
      lengthEnterText: text.length,
    });
  }

  render() {
    return (
      <div className="App">
        <input 
          placeholder="Enter your text" 
          value={this.state.text}
          onChange={this.checkEnterTextLength}
          onBlur={this.validateInputField}
          onFocus={this.resetValidation}
        />
        <p>{this.state.lengthEnterText}</p>
        <Validation 
            maximum={5} 
            minimum={2}
            validate={this.state.validate}
            lengthEnterText={this.state.lengthEnterText}/>
        {
          this.state.text.split('').map((char, index) => 
            (<Char value={char} key={index} click={() => this.deleteCharFromEnterText(index)}/>)
          )
        }
          
      </div>
    );
  }
}

export default App;
