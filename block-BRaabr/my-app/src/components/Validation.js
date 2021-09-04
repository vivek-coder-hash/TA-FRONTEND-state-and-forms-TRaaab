import React from 'react';
class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }

  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = (event) => {
    let { name, value } = event.target;

    //to access elements
    let elements = this.state[name];
    console.log('elements', elements);
    console.log('name', name);
    console.log('value', value);

    let errors = this.state.errors;

    switch (name) {
      case 'username':
        errors.username =
          value.length < 6 ? 'username must be greater than 5 characters' : '';

        break;

      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email not valid';

        break;

      case 'password':
        errors.password =
          value.length < 5 ? 'password length must be greater than 5' : '';

        break;

      case 'confirmPassword':
        errors.confirmPassword = value ? '' : 'Password2 is required';

        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value }); //update state of errors , name and value
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.username +
        ':' +
        this.state.email +
        ':' +
        this.state.password +
        ':' +
        this.state.confirmPassword
    );
  };

  render() {
    let { username, email, password, confirmPassword } = this.state.errors;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username:{this.state.username}</label>
        <input
          type="text"
          value={this.state.username}
          placeholder="Enter Username"
          name="username"
          onChange={this.handleInput}
        ></input>
        <span>{username}</span>
        <label htmlFor="email">Email:{this.state.email}</label>
        <input
          type="email"
          value={this.state.email}
          placeholder="Enter Email"
          name="email"
          onChange={this.handleInput}
        ></input>
        <span>{email}</span>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={this.state.password}
          placeholder="Enter Password"
          name="password"
          onChange={this.handleInput}
        ></input>
        <span>{password}</span>
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input
          type="password"
          value={this.state.confirmPassword}
          placeholder="Enter Password Again"
          name="confirmPassword"
          onChange={this.handleInput}
        ></input>
        <span>{confirmPassword}</span>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Validation;
