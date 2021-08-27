import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    //state in react is object
    this.state = {
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this); //explicit binding
  }
  //we use setState because react throw error "Do not mutate state directly"
  //class is made up of behaviour and view .To manage behavior we use state .
  // Why use setState ?  In javascript object is non primitive data type . And when you don't use setState , it will mutate the object . But using setState doesnot mutate object. And react gets to know that state has changed .when state changes your component re-render.

  // How to think about components from Now?  when you see Application ,you can think it as collection of small components . Each component can have behavior (if needed) and your view can help to interact with behaviour . when you change state your component will re-render.
  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

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
