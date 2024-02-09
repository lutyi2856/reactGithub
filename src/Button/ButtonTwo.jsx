import React from "react";

export class ButtonTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: "Title", two: "two" };
    // this.action = this.action.bind(this);
  }
  componentDidMount() {
    console.log("Сейчас");
  }
  componentWillUnmount() {
    console.log("ушел");
  }
  action = () => {
    this.setState({ test: "not" });
  };
  render() {
    return (
      <button
        href="#"
        onClick={this.action}
        className={`btn ${this.props.type}`}
      >
        <span>{this.props.icon}</span>
        <span>{this.state.test}</span>
        <p>{this.state.two}</p>
      </button>
    );
  }
}
