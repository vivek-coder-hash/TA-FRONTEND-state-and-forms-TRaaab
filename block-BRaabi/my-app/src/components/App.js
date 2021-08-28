import faqs from './data.json';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Altcampus FAQ</h1>

        <ul className="root">
          <ul>
            {faqs.map((faq, index) => (
              <li>
                <h2
                  onClick={() => {
                    this.setState({
                      activeIndex:
                        this.state.activeIndex === index ? null : index,
                    });
                  }}
                >
                  {faq.Q} {this.state.activeIndex === index ? '👆' : '👇'}
                </h2>
                {index === this.state.activeIndex ? <p>{faq.A}</p> : ''}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

export default App;
