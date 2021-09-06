import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputText: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleClick = () => {
    alert(this.state.inputText);
  };

  render() {
    return (
      <>
        <h1>understanding events</h1>
        <p>Hello {this.state.inputText}</p>
        <input
          value={this.state.inputText}
          onChange={this.handleChange}
          type="text"
        ></input>
        <button onClick={this.handleClick}>Submit</button>
      </>
    );
  }
}

export default App;
