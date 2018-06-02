import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = event => {
    const {value} = event.target;
    this.setState((prevState, props) => ({
      //we take our old props and spread them out here
      ...prevState,
      //and then overwrite the ones we want after
      searchTerm: value
    }));
  };

  render() {
    const {searchTerm} = this.state;
    return (
      <div className="page">
        <div className="search grid">
          <textarea
            rows="5"
            className="input grid-item"
            placeholder="Type something"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={searchTerm}
            ref={input => {
              this.textInput = input;
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
