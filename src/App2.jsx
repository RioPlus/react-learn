import React, { Component } from "react";

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  render() {
    return (
      <div>
        <h2> {this.state.num}</h2>

        <button
          onClick={() =>
            this.setState({
              num: this.state.num + 1,
            })
          }
        >
          点击1
        </button>

        <button onClick={this.addNum.bind(this)}>新增2</button>

        <button onClick={() => this.addNum()}>新增3</button>
      </div>
    );
  }

  addNum() {
    console.log("124");
    console.log(this.state.num);
  }
}
