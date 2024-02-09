import React from "react";

export class ButtonTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Title", two: "two" };
    // this.action = this.action.bind(this);
  }
  componentDidMount() {
    console.log("Классовый компонент вм");
  }
  componentWillUnmount() {
    console.log("ушел");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      prevProps,
      "=prevProps",
      prevState,
      "=prevState",
      this.state,
      "state",
    );
  }
  action = () => {
    this.setState({ name: Math.random() });
  };
  render() {
    return (
      <button
        href="#"
        onClick={this.action}
        className={`btn ${this.props.type}`}
      >
        <span>{this.props.icon}</span>
        <span>{this.state.name}</span>
        <p>{this.state.two}</p>
      </button>
    );
  }
}
