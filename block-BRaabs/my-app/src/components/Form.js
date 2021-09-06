import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      billing: {
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      error: {
        address: '',
        billAdress: '',
      },
      isSame: false,
    };
  }

  handleInput = (event) => {
    let { name, value } = event.target;
    let error = this.state.error;
    if (name === 'address') {
      error.address = value.length < 9 ? 'You need to enter at-least 8' : '';
    }
    this.setState({
      error,
      shipping: { ...this.state.shipping, [name]: value },
      //billing: { ...this.state.billing, [name]: value },
    });

    console.log(name, 'name');
    console.log(value, 'value');
  };

  handleInputBill = (event) => {
    let { name, value } = event.target;
    let error = this.state.error;
    if (name === 'address') {
      error.billAdress = value.length < 9 ? 'You need to enter at-least 8' : '';
    }
    this.setState({
      error,
      //  shipping: { ...this.state.shipping, [name]: value },
      billing: { ...this.state.billing, [name]: value },
    });
  };

  isSame = () => {
    return this.setState((preState) => {
      console.log(preState, 'prestate');
      //console.log(this.isSame, 'issame');
      return {
        isSame: !preState.isSame,
      };
    });
  };
  render() {
    let { address, billAdress } = this.state.error;
    let billingData = this.state.isSame
      ? this.state.shipping
      : this.state.billing;
    return (
      <div className="container">
        <form action="" className="flex w-3/4 mx-auto justify-between">
          <section className="flex-40 border-4 p-4 bg-red-50">
            <h1 className="text-4xl mb-6">Shipping Address</h1>
            <label htmlFor="address" className="mt-6">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full"
              onChange={this.handleInput}
            />
            <span className="text-red-300">{address}</span>
            <label htmlFor="zip" className="block w-full mt-6">
              zip/Postal Code
            </label>
            <input
              type="number"
              id="zip"
              name="zip"
              className="block w-full"
              onChange={this.handleInput}
            />
            <label htmlFor="city" className="block w-full mt-6">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="block w-full"
              onChange={this.handleInput}
            />
            <label htmlFor="country" className="block w-full mt-6">
              country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="block w-full"
              onChange={this.handleInput}
            />
          </section>
          <section className="flex-40 border-4 p-4 bg-red-50">
            <h1 className="text-4xl">Billing Address</h1>
            <div className="my-6">
              <input type="checkbox" id="checkbox" onClick={this.isSame} />
              <label htmlFor="checkbox">Same as the Shipping Address</label>
            </div>
            <label htmlFor="address" className="mt-6">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full"
              value={billingData.address}
              onChange={this.handleInputBill}
            />
            <span className="text-red-300">{billAdress}</span>
            <label htmlFor="zip" className="block w-full mt-6">
              zip/Postal Code
            </label>
            <input
              type="number"
              id="zip"
              name="zip"
              className="block w-full"
              value={billingData.zip}
              onChange={this.handleInputBill}
            />
            <label htmlFor="city" className="block w-full mt-6">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="block w-full"
              value={billingData.city}
              onChange={this.handleInputBill}
            />
            <label htmlFor="country" className="block w-full mt-6">
              country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="block w-full"
              value={billingData.country}
              onChange={this.handleInputBill}
            />
          </section>
        </form>
      </div>
    );
  }
}

export default Form;
