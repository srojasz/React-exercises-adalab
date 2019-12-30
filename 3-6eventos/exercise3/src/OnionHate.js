import React from "react";
import "./stylesheets/onionHate.css";

class OnionHate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isHating = false;
  }

  handleClick(event) {
    const eventTarget = event.target.value;

    if (eventTarget.includes("cebolla")) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }

  render() {
    if (this.isHating === true) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }

    return <textarea onChange={this.handleClick}></textarea>;
  }
}

export default OnionHate;
