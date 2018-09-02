import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "A"
        }

        this.handleClick.bind(this);

    }
    handleClick() {
        this.setState(
            {
                value: "Alpha"
            }
        );
    }


  render() {
    return (
      <div className="container">
          <h1>FlashCards </h1>
              <div className="card-columns">
                    <div className="card">
                      <div className="card-body">
                      <h4 className="card-title">Card title that wraps to a new line</h4>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                  </div>
        <div className="btn-group btn-group-justified">
        <button type="button" className="btn btn-primary">previous</button>
        {'    '}
        <button type="button" className="btn btn-primary"> next</button>
        </div>
              </div>

       
        </div>
    );
  }
}

export default App;
