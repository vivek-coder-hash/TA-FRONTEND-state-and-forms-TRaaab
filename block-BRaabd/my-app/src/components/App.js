import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'basketball',
    };
  }
  render() {
    let labels = [
      'basketball',
      'cricket',
      'laptop',
      'phone',
      'pubg',
      'show-image',
      'tiger',
    ];
    return (
      <>
        {labels.map((lable) => (
          <button
            className={this.state.active === lable ? 'active' : ''}
            onClick={() => {
              this.setState({
                active: lable,
              });
            }}
          >
            {lable}
          </button>
        ))}

        <img alt={this.state.active} src={`./images/{this.state.active}.jpg`} />
      </>
    );
  }
}

//when user click on button react will sync state with UI by calling render() method .
export default App;
