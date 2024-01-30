import React from "react";

export class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Сейчас");
  }
  componentWillUnmount() {
    console.log("ушел");
  }
  render() {
    return (
      <button
        href="#"
        onClick={this.props.action}
        className={`btn ${this.props.type}`}
      >
        <span>{this.props.icon}</span>
        <span onClick={this.props.action}>{this.props.title}</span>
      </button>
    );
  }
}
