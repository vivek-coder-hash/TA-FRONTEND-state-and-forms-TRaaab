import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    //state in react is object
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <p>Value</p>
        <button onClick={this.handleIncrement} className="btn increase">
          <i className="fas fa-caret-square-up"></i>
        </button>
        <div className="counter-box">{this.state.counter}</div>

        <button onClick={this.handleDecrement} className="btn decrease">
          <i className="fas fa-caret-square-down"></i>
        </button>
        <button onClick={this.handleReset} className="btn reset">
          <i class="fas fa-trash-restore"></i>
        </button>
      </div>
    );
  }
}

//when user click on button react will sync state with UI by calling render() method .
export default App;
