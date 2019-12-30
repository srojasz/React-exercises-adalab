import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  };

  handleChange(event) {
    let text = event.target.value;

    this.forceUpdate();
    console.log(text);

  }
  render() {
    return (

      <div>
        <MIMIMITranslator text={this.text} />
        <TextInput actionToPerform={this.handleChange} />
      </div>
    )
  }

}

export default App;
