import React , {Component} from 'react';

import classes from './Person.css';

class Person  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: this.props.age,
      name: this.props.name,
      children: this.props.children,
      click: this.props.click,
      changed: this.props.changed,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Person.js] getDerivedStateFromProps', props , state);
    return { 
      ...state,
      name: props.name,
    };
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.state.click}>
          I'm {this.state.name} and I am {this.state.age} years old!
        </p>
        <p>{this.state.children}</p>
        <input type="text" onChange={this.state.changed} value={this.state.name} />
      </div>
    );
  }
} 

export default Person;
