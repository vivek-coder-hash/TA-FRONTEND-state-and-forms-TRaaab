import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    //state in react is object
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
    this.handleIncrement = this.handleIncrement.bind(this); //explicit binding
  }

  handleIncrement() {
    let { count, step, max } = this.state;
    this.setState({
      count: count + step > max ? count : count + step,
    });
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>

        <div>
          <h3>Steps</h3>
          {[5, 10, 15].map((step) => (
            <button
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? 'active-step' : ''}
            >
              {step}
            </button>
          ))}

          <h3>Maximum Steps</h3>
          {[15, 100, 200].map((max) => (
            <button
              onClick={() => {
                this.setState({ max: max });
              }}
              className={this.state.max === max ? 'active-step' : ''}
            >
              {max}
            </button>
          ))}
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
}

//when user click on button react will sync state with UI by calling render() method .
export default App;
