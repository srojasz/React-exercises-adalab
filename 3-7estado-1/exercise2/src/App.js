import React from "react";
import css from "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "blue"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextClassName;
      if (prevState.className === 'blue') {
        nextClassName = 'red';
      } else {
        nextClassName = 'blue';
      }

      return {
        className: nextClassName
      };
    });
  }

  render() {
    return (
      <div
        className={this.state.className}
        onClick={this.handleClick}
      >
      </div>
    );
  }
}

export default App;
