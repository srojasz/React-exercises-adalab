import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      input: ev.target.value
    });

    console.log(ev.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.input}</p>
      </form>
    );
  }
}

export default App;
